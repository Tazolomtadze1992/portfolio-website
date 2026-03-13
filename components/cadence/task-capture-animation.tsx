"use client"

import * as React from "react"
import { motion } from "motion/react"

type TaskCaptureAnimationProps = React.ComponentPropsWithoutRef<"svg">

const easeOut = [0.22, 1, 0.36, 1] as const

export function TaskCaptureAnimation({ className, ...props }: TaskCaptureAnimationProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [animationKey, setAnimationKey] = React.useState(0)

  return (
    <div className="relative inline-flex items-center justify-center">
      <motion.svg
        key={animationKey}
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={isPlaying ? "visible" : "hidden"}
        className={["block", className].filter(Boolean).join(" ")}
        {...props}
      >
        <motion.g
          id="page-group"
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
        >
          <g id="page-parts">
            <g id="page-body" filter="url(#filter0_d_21_1968)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 22C28 17.5817 31.5817 14 36 14H84L100 30V94C100 98.4183 96.4183 102 92 102H36C31.5817 102 28 98.4183 28 94V22Z"
                fill="white"
              />
              <path
                d="M36 14.5H83.793L99.5 30.207V94C99.5 98.1421 96.1421 101.5 92 101.5H36C31.8579 101.5 28.5 98.1421 28.5 94V22C28.5 17.8579 31.8579 14.5 36 14.5Z"
                stroke="#C5C9CA"
              />
            </g>

            <g id="page-shadow" filter="url(#filter1_d_21_1968)">
              <path
                d="M84 25.5V26.5C84 28.1569 85.3431 29.5 87 29.5H99.5"
                stroke="#B6BBBB"
                strokeOpacity="0.01"
                strokeLinecap="square"
                strokeLinejoin="round"
                shapeRendering="crispEdges"
              />
            </g>

            <g id="page-fold">
              <path
                d="M84 15V27C84 28.6569 85.3431 30 87 30H99"
                stroke="#C5C9CA"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </g>
          </g>

          <motion.g
            id="title-line"
            variants={{
              hidden: { opacity: 0, y: 4, filter: "blur(6px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.24,
                  ease: easeOut,
                  delay: 0.3,
                },
              },
            }}
          >
            <rect x="40" y="26" width="24" height="2" rx="1" fill="#C5C9CA" />
          </motion.g>

          <g id="top-lines">
            <motion.rect
              x="40"
              y="40"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.54,
                  },
                },
              }}
            />
            <motion.rect
              x="40"
              y="46"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.60,
                  },
                },
              }}
            />
            <motion.rect
              x="40"
              y="52"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.66,
                  },
                },
              }}
            />
          </g>

          <g id="middle-lines">
            <motion.rect
              x="40"
              y="58"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.72,
                  },
                },
              }}
            />
            <motion.rect
              x="40"
              y="64"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.78,
                  },
                },
              }}
            />
            <motion.rect
              x="40"
              y="70"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.84,
                  },
                },
              }}
            />
          </g>

          <g id="bottom-lines">
            <motion.rect
              x="40"
              y="76"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.90,
                  },
                },
              }}
            />
            <motion.rect
              x="40"
              y="82"
              width="48"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 0.96,
                  },
                },
              }}
            />
            <motion.rect
              x="40"
              y="88"
              width="32"
              height="2"
              rx="1"
              fill="#DFE1E1"
              variants={{
                hidden: { opacity: 0, y: 2, scaleX: 0.65, transformOrigin: "left center", filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  scaleX: 1,
                  transformOrigin: "left center",
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.2,
                    ease: easeOut,
                    delay: 1.02,
                  },
                },
              }}
            />
          </g>
        </motion.g>

        <motion.g
          id="add-button"
          style={{ transformBox: "fill-box", transformOrigin: "center center" }}
          variants={{
            hidden: { opacity: 0.2, scale: 0, y: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                opacity: {
                  duration: 0.25,
                  delay: 0.9,
                },
                scale: {
                  type: "spring",
                  visualDuration: 0.3,
                  bounce: 0.5,
                  delay: 0.9,
                },
              },
            },
          }}
        >
          <g id="add-button-surface" filter="url(#filter2_dd_21_1968)">
            <circle cx="64" cy="93" r="24" fill="#FFF4E6" />
            <circle cx="64" cy="93" r="23.5" stroke="#FF9100" strokeDasharray="2 2" />
          </g>
          <path
            id="add-button-icon"
            d="M64 85C64.5523 85 65 85.4477 65 86V92H71C71.5523 92 72 92.4477 72 93C72 93.5523 71.5523 94 71 94H65V100C65 100.552 64.5523 101 64 101C63.4477 101 63 100.552 63 100V94H57C56.4477 94 56 93.5523 56 93C56 92.4477 56.4477 92 57 92H63V86C63 85.4477 63.4477 85 64 85Z"
            fill="#FF9100"
          />
        </motion.g>

        <defs>
          <filter
            id="filter0_d_21_1968"
            x="26"
            y="13"
            width="76"
            height="92"
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
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_1968" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_1968" result="shape" />
          </filter>
          <filter
            id="filter1_d_21_1968"
            x="82.5"
            y="25"
            width="18.5"
            height="7"
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
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_1968" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_1968" result="shape" />
          </filter>
          <filter
            id="filter2_dd_21_1968"
            x="36"
            y="67"
            width="56"
            height="56"
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
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_1968" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
            />
            <feBlend mode="normal" in2="effect1_dropShadow_21_1968" result="effect2_dropShadow_21_1968" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_21_1968" result="shape" />
          </filter>
          <clipPath id="bgblur_0_21_1968_clip_path" transform="translate(-36 -67)">
            <circle cx="64" cy="93" r="24" />
          </clipPath>
        </defs>
      </motion.svg>

      <button
        type="button"
        onClick={() => {
          setAnimationKey(prev => prev + 1)
          setIsPlaying(true)
        }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 rounded border bg-white/90 px-3 py-1 text-xs shadow-sm backdrop-blur"
      >
        Play
      </button>
    </div>
  )
}
