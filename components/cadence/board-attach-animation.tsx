"use client"

import * as React from "react"
import { motion, useInView } from "motion/react"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

type BoardAttachAnimationProps = React.ComponentPropsWithoutRef<"svg">

const easeOut = [0.22, 1, 0.36, 1] as const

export function BoardAttachAnimation({ className, ...props }: BoardAttachAnimationProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [animationKey, setAnimationKey] = React.useState(0)

  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const isInView = useInView(wrapperRef, { once: true, amount: 0.55 })

  React.useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1)
      setIsPlaying(true)
    }
  }, [isInView])

  const card1Ref = React.useRef<SVGGElement | null>(null)
  const card2Ref = React.useRef<SVGGElement | null>(null)
  const card3Ref = React.useRef<SVGGElement | null>(null)
  const card4Ref = React.useRef<SVGGElement | null>(null)

  const target1Ref = React.useRef<SVGGElement | null>(null)
  const target2Ref = React.useRef<SVGGElement | null>(null)
  const target3Ref = React.useRef<SVGGElement | null>(null)
  const target4Ref = React.useRef<SVGGElement | null>(null)

  const [deltas, setDeltas] = React.useState<Record<string, { x: number; y: number }>>({})

  React.useEffect(() => {
    if (!isPlaying) return

    const computeDelta = (card: SVGGElement | null, target: SVGGElement | null) => {
      if (!card || !target) return { x: 0, y: 0 }
      const cardBox = card.getBBox()
      const targetBox = target.getBBox()
      return {
        x: targetBox.x - cardBox.x,
        y: targetBox.y - cardBox.y,
      }
    }

    setDeltas({
      "card-1": computeDelta(card1Ref.current, target1Ref.current),
      "card-2": computeDelta(card2Ref.current, target2Ref.current),
      "card-3": computeDelta(card3Ref.current, target3Ref.current),
      "card-4": computeDelta(card4Ref.current, target4Ref.current),
    })
  }, [isPlaying, animationKey])

  const cardMoveTransition = (delay: number) => ({
    delay,
    duration: 0.7,
    ease: easeOut,
  })

  return (
    <div ref={wrapperRef} className="relative inline-flex items-center justify-center">
      <motion.svg
        key={animationKey}
        width="297"
        height="184"
        viewBox="0 0 297 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial="hidden"
        animate={isPlaying ? "visible" : "hidden"}
        {...props}
      >
        {/* Board */}
        <motion.g
          id="board"
          variants={{
            hidden: { opacity: 0, scale: 0, y: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.4,
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.5,
                },
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center center" }}
        >
          <g opacity="0.94" filter="url(#filter4_ddiii_34_2756)">
            <g id="board-body" clipPath="url(#clip0_34_2756)">
              <rect x="62" y="27" width="172.997" height="129.991" rx="4" fill="#FDFDFE" />

              {/* Header */}
              <g id="header" opacity="0.96">
                <path
                  d="M63.4844 31.9932C63.4844 29.784 65.2752 27.9932 67.4844 27.9932L228.483 27.9932C230.692 27.9932 232.483 29.784 232.483 31.9932V40.9931L63.4844 40.9931V31.9932Z"
                  fill="white"
                />
                <rect x="62" y="40" width="172" height="1" fill="#D8D9D9" />

                <g clipPath="url(#clip1_34_2756)">
                  <g clipPath="url(#clip2_34_2756)">
                    <path
                      d="M224.483 33.9795C224.483 32.8729 225.378 31.9766 226.483 31.9766C227.588 31.9766 228.483 32.8729 228.483 33.9795C228.483 35.0861 227.588 35.9824 226.483 35.9824C225.378 35.9824 224.483 35.0861 224.483 33.9795Z"
                      fill="#DFE1E1"
                    />
                  </g>
                </g>
              </g>

              {/* Panel / header text + controls */}
              <g id="panel">
                <rect x="66" y="49" width="30" height="2" rx="1" fill="#DFE1E1" />
                <rect x="66" y="44.9966" width="32.9991" height="2.00202" rx="1.00101" fill="#DFE1E1" />
                <g opacity="0.94">
                  <rect
                    x="65.9961"
                    y="64.9966"
                    width="32.9991"
                    height="2.00202"
                    rx="1.00101"
                    fill="#DFE1E1"
                  />
                  <rect
                    x="65.998"
                    y="61.0024"
                    width="32.9995"
                    height="2.00202"
                    rx="1.00101"
                    fill="#DFE1E1"
                  />
                  <rect
                    x="65.9951"
                    y="69.001"
                    width="31.0021"
                    height="2.00202"
                    rx="1.00101"
                    fill="#DFE1E1"
                  />
                  <rect
                    x="66"
                    y="54.9966"
                    width="22.9935"
                    height="2.00202"
                    rx="1.00101"
                    fill="#E3E5E5"
                  />
                </g>

                <rect x="66" y="145" width="14" height="8" rx="4" fill="white" />
                <rect x="68.001" y="147.003" width="3.99452" height="3.99406" rx="1.99703" fill="#C5C9CA" />
                <rect x="74.002" y="146.997" width="3.99406" height="4.00405" rx="1.99703" fill="#E1E3E3" />
                <path
                  d="M66 149C66 146.791 67.7909 145 70 145H76C78.2091 145 80 146.791 80 149V149C80 151.209 78.2091 153 76 153H70C67.7909 153 66 151.209 66 149V149Z"
                  fill="none"
                  id="panel-toggle-hit-area"
                />
                <rect x="103" y="41" width="1" height="116" fill="#D8D9D9" />
              </g>

              {/* Targets in board body */}
              <g id="target-1" ref={target1Ref}>
                <rect x="192" y="53" width="38" height="38" rx="4" fill="#FDFDFE" />
              </g>
              <g id="target-2" ref={target2Ref}>
                <rect x="150" y="71" width="38" height="38" rx="4" fill="#FDFDFE" />
              </g>
              <g id="target-3" ref={target3Ref}>
                <rect x="108" y="95" width="38" height="38" rx="4" fill="#FDFDFE" />
              </g>
              <g id="target-4" ref={target4Ref}>
                <rect x="192" y="95" width="38" height="38" rx="4" fill="#FDFDFE" />
              </g>
            </g>
          </g>
          <rect x="62.5" y="27.5" width="171.997" height="128.991" rx="3.5" stroke="#DADBDC" />
        </motion.g>

        {/* Cards */}
        <motion.g
          id="card-1"
          variants={{
            hidden: { opacity: 0.2, scale: 0, y: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                opacity: { duration: 0.12, delay: 0.25 },
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.35,
                  delay: 0.25,
                },
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center center" }}
        >
          <motion.g
            ref={card1Ref}
            initial={{ x: 0, y: 0 }}
            animate={
              isPlaying && deltas["card-1"]
                ? { x: deltas["card-1"].x, y: deltas["card-1"].y, transition: cardMoveTransition(1.15) }
                : { x: 0, y: 0 }
            }
          >
            <rect x="8.5" y="8.5" width="37" height="37" rx="3.5" fill="#FDFDFE" />
            <rect x="8.5" y="8.5" width="37" height="37" rx="3.5" stroke="#DADBDC" />
            <g filter="url(#filter3_ddiii_34_2756)">
              <rect
                x="8"
                y="8"
                width="38"
                height="38"
                rx="4"
                fill="white"
                fillOpacity="0.01"
                shapeRendering="crispEdges"
              />
            </g>
            <rect x="12" y="12" width="23.0044" height="4.00586" rx="2.00293" fill="#FFD091" />
            <rect x="12" y="23.9995" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="12" y="40" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="12" y="20" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="12" y="32" width="24" height="2" rx="1" fill="#DFE1E1" />
            <rect x="12" y="27.9995" width="29" height="2" rx="1" fill="#DFE1E1" />
          </motion.g>
        </motion.g>

        <motion.g
          id="card-2"
          variants={{
            hidden: { opacity: 0.2, scale: 0, y: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                opacity: { duration: 0.12, delay: 0.38 },
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.35,
                  delay: 0.38,
                },
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center center" }}
        >
          <motion.g
            ref={card2Ref}
            initial={{ x: 0, y: 0 }}
            animate={
              isPlaying && deltas["card-2"]
                ? { x: deltas["card-2"].x, y: deltas["card-2"].y, transition: cardMoveTransition(1.35) }
                : { x: 0, y: 0 }
            }
          >
            <rect x="16.5" y="94.5" width="37" height="37" rx="3.5" fill="#FDFDFE" />
            <rect x="16.5" y="94.5" width="37" height="37" rx="3.5" stroke="#DADBDC" />
            <g filter="url(#filter1_ddiii_34_2756)">
              <rect
                x="16"
                y="94"
                width="38"
                height="38"
                rx="4"
                fill="white"
                fillOpacity="0.01"
                shapeRendering="crispEdges"
              />
            </g>
            <rect x="20" y="98" width="23.0044" height="4.00586" rx="2.00293" fill="#FFD091" />
            <rect x="20" y="110" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="20" y="126" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="20" y="106" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="20" y="118" width="24" height="2" rx="1" fill="#DFE1E1" />
            <rect x="20" y="114" width="29" height="2" rx="1" fill="#DFE1E1" />
          </motion.g>
        </motion.g>

        <motion.g
          id="card-3"
          variants={{
            hidden: { opacity: 0.2, scale: 0, y: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                opacity: { duration: 0.12, delay: 0.51 },
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.35,
                  delay: 0.51,
                },
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center center" }}
        >
          <motion.g
            ref={card3Ref}
            initial={{ x: 0, y: 0 }}
            animate={
              isPlaying && deltas["card-3"]
                ? { x: deltas["card-3"].x, y: deltas["card-3"].y, transition: cardMoveTransition(1.55) }
                : { x: 0, y: 0 }
            }
          >
            <rect x="251.5" y="51.5" width="37" height="37" rx="3.5" fill="#FDFDFE" />
            <rect x="251.5" y="51.5" width="37" height="37" rx="3.5" stroke="#DADBDC" />
            <g filter="url(#filter2_ddiii_34_2756)">
              <rect
                x="251"
                y="51"
                width="38"
                height="38"
                rx="4"
                fill="white"
                fillOpacity="0.01"
                shapeRendering="crispEdges"
              />
            </g>
            <rect x="255" y="55" width="23.0044" height="4.00586" rx="2.00293" fill="#FFD091" />
            <rect x="255" y="66.9995" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="255" y="83" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="255" y="63" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="255" y="75" width="24" height="2" rx="1" fill="#DFE1E1" />
            <rect x="255" y="70.9995" width="29" height="2" rx="1" fill="#DFE1E1" />
          </motion.g>
        </motion.g>

        <motion.g
          id="card-4"
          variants={{
            hidden: { opacity: 0.2, scale: 0, y: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                opacity: { duration: 0.12, delay: 0.64 },
                scale: {
                  type: "spring",
                  visualDuration: 0.4,
                  bounce: 0.35,
                  delay: 0.64,
                },
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center center" }}
        >
          <motion.g
            ref={card4Ref}
            initial={{ x: 0, y: 0 }}
            animate={
              isPlaying && deltas["card-4"]
                ? { x: deltas["card-4"].x, y: deltas["card-4"].y, transition: cardMoveTransition(1.75) }
                : { x: 0, y: 0 }
            }
          >
            <rect x="243.5" y="138.5" width="37" height="37" rx="3.5" fill="#FDFDFE" />
            <rect x="243.5" y="138.5" width="37" height="37" rx="3.5" stroke="#DADBDC" />
            <g filter="url(#filter0_ddiii_34_2756)">
              <rect
                x="243"
                y="138"
                width="38"
                height="38"
                rx="4"
                fill="white"
                fillOpacity="0.01"
                shapeRendering="crispEdges"
              />
            </g>
            <rect x="247" y="142" width="23.0044" height="4.00586" rx="2.00293" fill="#FFD091" />
            <rect x="247" y="154" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="247" y="170" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="247" y="150" width="29" height="2" rx="1" fill="#DFE1E1" />
            <rect x="247" y="162" width="24" height="2" rx="1" fill="#DFE1E1" />
            <rect x="247" y="158" width="29" height="2" rx="1" fill="#DFE1E1" />
          </motion.g>
        </motion.g>

        {/* Filters and clip paths */}
        <defs>
        <filter
          id="filter0_ddiii_34_2756"
          x="235"
          y="130"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.602187" />
          <feGaussianBlur stdDeviation="0.301093" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.956863 0 0 0 0 0.901961 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_34_2756" result="effect2_dropShadow_34_2756" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_34_2756" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.878431 0 0 0 0 0.882353 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="effect3_innerShadow_34_2756" result="effect4_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect4_innerShadow_34_2756" result="effect5_innerShadow_34_2756" />
        </filter>

        <filter
          id="filter1_ddiii_34_2756"
          x="8"
          y="86"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.602187" />
          <feGaussianBlur stdDeviation="0.301093" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.956863 0 0 0 0 0.901961 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_34_2756" result="effect2_dropShadow_34_2756" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_34_2756" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.878431 0 0 0 0 0.882353 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="effect3_innerShadow_34_2756" result="effect4_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect4_innerShadow_34_2756" result="effect5_innerShadow_34_2756" />
        </filter>

        <filter
          id="filter2_ddiii_34_2756"
          x="243"
          y="43"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.602187" />
          <feGaussianBlur stdDeviation="0.301093" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.956863 0 0 0 0 0.901961 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_34_2756" result="effect2_dropShadow_34_2756" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_34_2756" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.878431 0 0 0 0 0.882353 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="effect3_innerShadow_34_2756" result="effect4_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect4_innerShadow_34_2756" result="effect5_innerShadow_34_2756" />
        </filter>

        <filter
          id="filter3_ddiii_34_2756"
          x="0"
          y="0"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.602187" />
          <feGaussianBlur stdDeviation="0.301093" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.956863 0 0 0 0 0.901961 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_34_2756" result="effect2_dropShadow_34_2756" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_34_2756" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.878431 0 0 0 0 0.882353 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="effect3_innerShadow_34_2756" result="effect4_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect4_innerShadow_34_2756" result="effect5_innerShadow_34_2756" />
        </filter>

        <filter
          id="filter4_ddiii_34_2756"
          x="54"
          y="19"
          width="188.997"
          height="145.991"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.602187" />
          <feGaussianBlur stdDeviation="0.301093" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.956863 0 0 0 0 0.901961 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_34_2756" result="effect2_dropShadow_34_2756" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_34_2756" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-6" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 0.878431 0 0 0 0 0.882353 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="effect3_innerShadow_34_2756" result="effect4_innerShadow_34_2756" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
          <feBlend mode="normal" in2="effect4_innerShadow_34_2756" result="effect5_innerShadow_34_2756" />
        </filter>

        <clipPath id="clip0_34_2756">
          <rect x="62" y="27" width="172.997" height="129.991" rx="4" fill="white" />
        </clipPath>
        <clipPath id="clip1_34_2756">
          <rect width="4" height="4.00586" fill="white" transform="translate(224.483 31.9766)" />
        </clipPath>
        <clipPath id="clip2_34_2756">
          <rect width="4" height="4.00586" fill="white" transform="translate(224.483 31.9766)" />
        </clipPath>
      </defs>
      </motion.svg>

      <Button
        type="button"
        variant="secondary"
        size="xs"
        aria-label="Replay animation"
        onClick={() => {
          setAnimationKey((prev) => prev + 1)
          setIsPlaying(true)
        }}
        className="absolute left-72 bottom-48 h-6 w-6 rounded-full border border-black/5 bg-white/80 shadow-sm backdrop-blur-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <RotateCcw className="h-4 w-4" strokeWidth={1.15} />
      </Button>
    </div>
  )
}

