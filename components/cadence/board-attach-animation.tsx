"use client"

import * as React from "react"

type BoardAttachAnimationProps = React.ComponentPropsWithoutRef<"svg">

export function BoardAttachAnimation({ className, ...props }: BoardAttachAnimationProps) {
  return (
    <svg
      width="297"
      height="184"
      viewBox="0 0 297 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Cards */}
      <g id="card-1">
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
      </g>

      <g id="card-2">
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
      </g>

      <g id="card-3">
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
      </g>

      <g id="card-4">
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
      </g>

      {/* Board */}
      <g id="board">
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
            <g id="target-1">
              <rect x="192" y="53" width="38" height="38" rx="4" fill="#FDFDFE" />
            </g>
            <g id="target-2">
              <rect x="150" y="71" width="38" height="38" rx="4" fill="#FDFDFE" />
            </g>
            <g id="target-3">
              <rect x="108" y="95" width="38" height="38" rx="4" fill="#FDFDFE" />
            </g>
            <g id="target-4">
              <rect x="192" y="95" width="38" height="38" rx="4" fill="#FDFDFE" />
            </g>
          </g>
        </g>
        <rect x="62.5" y="27.5" width="171.997" height="128.991" rx="3.5" stroke="#DADBDC" />
      </g>

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
    </svg>
  )
}

