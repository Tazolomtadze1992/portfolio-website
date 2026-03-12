"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselContextValue = {
  orientation: "horizontal" | "vertical"
  viewportRef: React.RefObject<HTMLDivElement | null>
  activeIndex: number
  setActiveIndex: (index: number) => void
  itemCount: number
  setItemCount: (count: number) => void
  requestIndexChange: (index: number) => void
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function getViewportChildren(viewport: HTMLDivElement) {
  const track = viewport.firstElementChild
  if (!track) return [] as HTMLElement[]
  return Array.from(track.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement
  )
}

function getSnapTargetForIndex(
  viewport: HTMLDivElement,
  item: HTMLElement,
  index: number,
  itemCount: number,
  orientation: "horizontal" | "vertical"
) {
  const isFirst = index === 0
  const isLast = index === itemCount - 1

  if (orientation === "horizontal") {
    if (isFirst) return item.offsetLeft
    if (isLast) return item.offsetLeft - (viewport.clientWidth - item.offsetWidth)
    return item.offsetLeft - (viewport.clientWidth - item.offsetWidth) / 2
  }

  if (isFirst) return item.offsetTop
  if (isLast) return item.offsetTop - (viewport.clientHeight - item.offsetHeight)
  return item.offsetTop - (viewport.clientHeight - item.offsetHeight) / 2
}

function getNearestSnapIndex(viewport: HTMLDivElement, orientation: "horizontal" | "vertical") {
  const items = getViewportChildren(viewport)
  if (items.length === 0) return 0

  const current = orientation === "horizontal" ? viewport.scrollLeft : viewport.scrollTop

  let nearestIndex = 0
  let nearestDistance = Number.POSITIVE_INFINITY

  items.forEach((item, index) => {
    const target = getSnapTargetForIndex(viewport, item, index, items.length, orientation)
    const distance = Math.abs(current - target)
    if (distance < nearestDistance) {
      nearestDistance = distance
      nearestIndex = index
    }
  })

  return nearestIndex
}

function snapToIndex(
  viewport: HTMLDivElement,
  index: number,
  orientation: "horizontal" | "vertical",
  behavior: ScrollBehavior = "smooth"
) {
  const items = getViewportChildren(viewport)
  const item = items[index]
  if (!item) return

  const target = getSnapTargetForIndex(viewport, item, index, items.length, orientation)

  if (orientation === "horizontal") {
    viewport.scrollTo({ left: target, behavior })
    return
  }

  viewport.scrollTo({ top: target, behavior })
}

export function Carousel({ orientation = "horizontal", className, children }: CarouselProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [itemCount, setItemCount] = React.useState(0)

  const activeIndexRef = React.useRef(0)
  const isAnimatingRef = React.useRef(false)

  React.useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  const goToIndex = React.useCallback(
    (targetIndex: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = viewportRef.current
      if (!viewport || itemCount <= 0) return

      const clamped = Math.max(0, Math.min(itemCount - 1, targetIndex))
      if (clamped === activeIndexRef.current) return

      isAnimatingRef.current = true
      snapToIndex(viewport, clamped, orientation, behavior)
      setActiveIndex(clamped)

      window.setTimeout(() => {
        isAnimatingRef.current = false
      }, 350)
    },
    [itemCount, orientation]
  )

  React.useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || itemCount <= 0) return

    const handleResize = () => {
      const index = Math.min(activeIndexRef.current, Math.max(0, itemCount - 1))
      snapToIndex(viewport, index, orientation, "auto")
    }

    const initialIndex = Math.min(activeIndexRef.current, Math.max(0, itemCount - 1))
    snapToIndex(viewport, initialIndex, orientation, "auto")

    const threshold = 24
    let pointerStart = 0
    let pointerActive = false
    let pointerCommitted = false

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return
      pointerActive = true
      pointerCommitted = false
      pointerStart = event.clientX
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!pointerActive || pointerCommitted || isAnimatingRef.current) return
      const delta = event.clientX - pointerStart
      if (Math.abs(delta) < threshold) return

      const direction = delta < 0 ? 1 : -1
      const nextIndex = activeIndexRef.current + direction
      if (nextIndex >= 0 && nextIndex < itemCount) {
        goToIndex(nextIndex)
        pointerCommitted = true
      } else {
        pointerCommitted = true
      }
    }

    const onPointerUp = () => {
      pointerActive = false
      pointerCommitted = false
    }

    const onWheel = (event: WheelEvent) => {
      if (isAnimatingRef.current) return

      const primaryDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
      if (Math.abs(primaryDelta) < 10) return

      event.preventDefault()
      const direction = primaryDelta > 0 ? 1 : -1
      const nextIndex = activeIndexRef.current + direction
      if (nextIndex >= 0 && nextIndex < itemCount) {
        goToIndex(nextIndex)
      }
    }

    viewport.addEventListener("pointerdown", onPointerDown)
    viewport.addEventListener("pointermove", onPointerMove)
    viewport.addEventListener("pointerup", onPointerUp)
    viewport.addEventListener("pointercancel", onPointerUp)
    viewport.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("resize", handleResize)

    return () => {
      viewport.removeEventListener("pointerdown", onPointerDown)
      viewport.removeEventListener("pointermove", onPointerMove)
      viewport.removeEventListener("pointerup", onPointerUp)
      viewport.removeEventListener("pointercancel", onPointerUp)
      viewport.removeEventListener("wheel", onWheel)
      window.removeEventListener("resize", handleResize)
    }
  }, [goToIndex, itemCount, orientation])

  return (
    <CarouselContext.Provider
      value={{
        orientation,
        viewportRef,
        activeIndex,
        setActiveIndex,
        itemCount,
        setItemCount,
        requestIndexChange: (index) => goToIndex(index),
      }}
    >
      <div
        className={cn(
          "relative",
          orientation === "horizontal" ? "w-full" : "h-full",
          className
        )}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

type CarouselProps = {
  orientation?: "horizontal" | "vertical"
  className?: string
  children: React.ReactNode
}

type CarouselContentProps = React.HTMLAttributes<HTMLDivElement>

type CarouselItemProps = React.HTMLAttributes<HTMLDivElement>

export const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(CarouselContext)
    if (!context) throw new Error("CarouselContent must be used within a Carousel")

    const { orientation, viewportRef, setItemCount } = context

    React.useEffect(() => {
      const children = (props as any).children
      const count = React.Children.count(children)
      setItemCount(count)
    }, [props.children, setItemCount])

    return (
      <div
        ref={viewportRef}
        className={cn(
          "overflow-x-auto overflow-y-hidden scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          orientation === "horizontal" ? "pb-0" : "pb-0"
        )}
      >
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal"
              ? "-ml-4 snap-x snap-mandatory"
              : "-mt-4 flex-col snap-y snap-mandatory",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
CarouselContent.displayName = "CarouselContent"

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(CarouselContext)
    if (!context) throw new Error("CarouselItem must be used within a Carousel")

    const { orientation } = context

    return (
      <div
        ref={ref}
        className={cn(
          "min-w-0 flex-shrink-0",
          orientation === "horizontal"
            ? "pl-4 snap-center first:snap-start last:snap-end [scroll-snap-stop:always]"
            : "pt-4 snap-center",
          className
        )}
        {...props}
      />
    )
  }
)
CarouselItem.displayName = "CarouselItem"

function useCarouselViewport() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("Carousel controls must be used within a Carousel")
  return context.viewportRef
}

export function CarouselDots({ className }: { className?: string }) {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("CarouselDots must be used within a Carousel")

  const { itemCount, activeIndex, requestIndexChange } = context
  if (itemCount <= 1) return null

  return (
    <div className={cn("mt-4 flex items-center justify-center gap-2", className)}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <span
          key={index}
          onClick={() => requestIndexChange(index)}
          className={cn(
            "h-2 w-2 rounded-full cursor-pointer",
            index === activeIndex ? "bg-foreground" : "bg-muted"
          )}
        />
      ))}
    </div>
  )
}

export function CarouselPrevious({ className, ...props }: React.ComponentProps<typeof Button>) {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("CarouselPrevious must be used within a Carousel")

  const { activeIndex, requestIndexChange } = context

  const scrollPrev = React.useCallback(() => {
    const nextIndex = Math.max(0, activeIndex - 1)
    requestIndexChange(nextIndex)
  }, [activeIndex, requestIndexChange])

  return (
    <Button
      type="button"
      size="icon-sm"
      variant="ghost"
      className={cn(
        "absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-sm",
        className
      )}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>
  )
}

export function CarouselNext({ className, ...props }: React.ComponentProps<typeof Button>) {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("CarouselNext must be used within a Carousel")

  const { activeIndex, itemCount, requestIndexChange } = context

  const scrollNext = React.useCallback(() => {
    const nextIndex = Math.min(itemCount - 1, activeIndex + 1)
    requestIndexChange(nextIndex)
  }, [activeIndex, itemCount, requestIndexChange])

  return (
    <Button
      type="button"
      size="icon-sm"
      variant="ghost"
      className={cn(
        "absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-sm",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
    </Button>
  )
}
