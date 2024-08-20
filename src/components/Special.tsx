import Instagram from "../assets/inst.svg";
import YouTube from "../assets/ytube.svg";
import TikTok from "../assets/tiktok.svg";
import fanImage from "../assets/fan-image.png";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { LinkVerify } from "../api/linkverify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Special = () => {
  const userContext = useContext<any>(UserContext); // Use the context
  const [reward, setMissions] = useState<any>([]);
  useEffect(() => {
    if (userContext && userContext.user && userContext.user.telegram_id) {
      fetchMissions(userContext.user.telegram_id);
    }
  }, [userContext]);

  const fetchMissions = async (telegram_id: any) => {
    console.log(" LinkVerify telegram_id :", telegram_id);
    try {
      const response = await LinkVerify(); // Adjust the type as needed
      console.log(" LinkVerify API Response:", response.data);
      setMissions(response.data || []);
    } catch (error) {
      console.error("Error fetching task_deatils:", error);
    }
  };
  return (
    <div className="pagehight">
      <style>{`
      .pagehight{
          height: 110%;
      }
                .task-ref-button{
    justify-content: center;
    display: flex;
  }
  .table-th{
    display: inline-flex;
  }

  .task-ref{
    margin-top: 24px;
    /* border: 2px solid #676363; */
    box-shadow: inset 2px 2px 18px #f7f3f380;
    padding: 20px;
    background-color: #CB731A;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 75px;
    height: 8px;
    margin: 0px 0px 0px 8px;
  }


:before,:after {
    --tw-content: ""
}

html,:host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
    font-feature-settings: normal;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent
}



hr {
    height: 0;
    color: inherit;
    border-top-width: 1px
}

abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

h1,h2,h3,h4,h5,h6 {
    font-size: inherit;
    font-weight: inherit
}

a {
    color: inherit;
    text-decoration: inherit
}

b,strong {
    font-weight: bolder
}

code,kbd,samp,pre {
    font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em
}

small {
    font-size: 80%
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse
}






:-moz-focusring {
    outline: auto
}

:-moz-ui-invalid {
    box-shadow: none
}

progress {
    vertical-align: baseline
}

::-webkit-inner-spin-button,::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

summary {
    display: list-item
}

blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {
    margin: 0
}

fieldset {
    margin: 0;
    padding: 0
}

legend {
    padding: 0
}

ol,ul,menu {
    list-style: none;
    margin: 0;
    padding: 0
}

dialog {
    padding: 0
}

textarea {
    resize: vertical
}

input::-moz-placeholder,textarea::-moz-placeholder {
    opacity: 1;
    color: #9ca3af
}

input::placeholder,textarea::placeholder {
    opacity: 1;
    color: #9ca3af
}

button,[role=button] {
    cursor: pointer
}

:disabled {
    cursor: default
}

img,svg,video,canvas,audio,iframe,embed,object {
    display: block;
    vertical-align: middle
}

img,video {
    max-width: 100%;
    height: auto
}

[hidden] {
    display: none
}



::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style:
}

.pointer-events-none {
    pointer-events: none
}

.visible {
    visibility: visible
}

.invisible {
    visibility: hidden
}

.fixed {
    position: fixed
}

.absolute {
    position: absolute
}

.relative {
    position: relative
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.inset-y-0 {
    top: 0;
    bottom: 0
}

.bottom-0 {
    bottom: 0
}

.left-1\/2 {
    left: 50%
}

.right-0 {
    right: 0
}

.right-1 {
    right: .25rem
}

.right-2 {
    right: .5rem
}

.right-2\.5 {
    right: .625rem
}

.right-3 {
    right: .75rem
}

.right-4 {
    right: 1rem
}

.top-0 {
    top: 0
}

.top-1 {
    top: .25rem
}

.top-1\/2 {
    top: 50%
}

.top-2 {
    top: .5rem
}

.top-2\.5 {
    top: .625rem
}

.top-3 {
    top: .75rem
}

.top-3\.5 {
    top: .875rem
}

.top-4 {
    top: 1rem
}

.-z-10 {
    z-index: -10
}

.z-10 {
    z-index: 10
}

.z-20 {
    z-index: 20
}

.z-50 {
    z-index: 50
}

.m-auto {
    margin: auto
}

.mx-1 {
    margin-left: .25rem;
    margin-right: .25rem
}

.mx-10 {
    margin-left: 2.5rem;
    margin-right: 2.5rem
}

.mx-8 {
    margin-left: 2rem;
    margin-right: 2rem
}

.mx-auto {
    margin-left: auto;
    margin-right: auto
}

.my-2 {
    margin-top: .5rem;
    margin-bottom: .5rem
}

.my-3 {
    margin-top: .75rem;
    margin-bottom: .75rem
}

.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem
}

.my-5 {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem
}

.-mb-2 {
    margin-bottom: -.5rem
}

.-ml-6 {
    margin-left: -1.5rem
}

.-mt-0 {
    margin-top: -0px
}

.-mt-0\.5 {
    margin-top: -.125rem
}

.-mt-1 {
    margin-top: -.25rem
}

.-mt-2 {
    margin-top: -.5rem
}

.mb-1 {
    margin-bottom: .25rem
}

.mb-2 {
    margin-bottom: .5rem
}

.mb-4 {
    margin-bottom: 1rem
}

.mb-8 {
    margin-bottom: 2rem
}

.ml-2 {
    margin-left: .5rem
}

.ml-4 {
    margin-left: 1rem
}

.mr-1 {
    margin-right: .25rem
}

.mr-2 {
    margin-right: .5rem
}

.mt-0 {
    margin-top: 0
}

.mt-0\.5 {
    margin-top: .125rem
}

.mt-1 {
    margin-top: .25rem
}

.mt-2 {
    margin-top: .5rem
}

.mt-3 {
    margin-top: .75rem
}

.mt-4 {
    margin-top: 1rem
}

.mt-5 {
    margin-top: 1.25rem
}

.block {
    display: block
}

.inline-block {
    display: inline-block
}

.inline {
    display: inline
}

.flex {
    display: flex
}

.inline-flex {
    display: inline-flex
}

.table {
    display: table
}

.grid {
    display: grid
}

.aspect-square {
    aspect-ratio: 1 / 1
}

.size-4 {
    width: 1rem;
    height: 1rem
}

.size-5 {
    width: 1.25rem;
    height: 1.25rem
}

.h-10 {
    height: 2.5rem
}

.h-2 {
    height: .5rem
}

.h-2\.5 {
    height: .625rem
}

.h-32 {
    height: 8rem
}

.h-4 {
    height: 1rem
}

.h-5 {
    height: 1.25rem
}

.h-6 {
    height: 1.5rem
}

.h-64 {
    height: 16rem
}

.h-7 {
    height: 1.75rem
}

.h-8 {
    height: 2rem
}

.h-9 {
    height: 2.25rem
}

.h-\[18px\] {
    height: 18px
}

.h-\[60px\] {
    height: 60px
}

.h-\[calc\(100vh-140px\)\] {
    height: calc(100vh - 140px)
}

.h-\[calc\(100vh-200px\)\] {
    height: calc(100vh - 200px)
}

.h-\[calc\(100vh-250px\)\] {
    height: calc(100vh - 250px)
}

.h-\[calc\(100vh-290px\)\] {
    height: calc(100vh - 290px)
}

.h-\[calc\(100vh-378px\)\] {
    height: calc(100vh - 378px)
}

.h-\[calc\(100vh-84px\)\] {
    height: calc(100vh - 84px)
}

.h-\[calc\(100vh-92px\)\] {
    height: calc(100vh - 92px)
}

.h-auto {
    height: auto
}

.h-full {
    height: 100%
}

.h-screen {
    height: 100vh
}

.max-h-\[350px\] {
    max-height: 350px
}

.max-h-\[400px\] {
    max-height: 400px
}

.min-h-4 {
    min-height: 1rem
}

.min-h-\[60px\] {
    min-height: 60px
}

.min-h-full {
    min-height: 100%
}

.w-10 {
    width: 2.5rem
}

.w-2 {
    width: .5rem
}

.w-2\.5 {
    width: .625rem
}

.w-32 {
    width: 8rem
}

.w-4 {
    width: 1rem
}

.w-5 {
    width: 1.25rem
}

.w-6 {
    width: 1.5rem
}

.w-64 {
    width: 16rem
}

.w-7 {
    width: 1.75rem
}

.w-8 {
    width: 2rem
}

.w-9 {
    width: 2.25rem
}

.w-\[18px\] {
    width: 18px
}

.w-\[260px\] {
    width: 260px
}

.w-\[60px\] {
    width: 60px
}

.w-\[var\(--button-width\)\] {
    width: var(--button-width)
}

.w-full {
    width: 100%
}

.w-screen {
    width: 100vw
}

.min-w-4 {
    min-width: 1rem
}

.min-w-\[60px\] {
    min-width: 60px
}

.min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content
}

.max-w-\[150px\] {
    max-width: 150px
}

.max-w-\[250px\] {
    max-width: 250px
}

.max-w-\[260px\] {
    max-width: 260px
}

.max-w-md {
    max-width: 28rem
}

.flex-1 {
    flex: 1 1 0%
}

.flex-shrink-0 {
    flex-shrink: 0
}

.flex-grow {
    flex-grow: 1
}

.caption-bottom {
    caption-side: bottom
}

.-translate-x-1\/2 {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-translate-y-1\/2 {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.transform {
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.animate-\[spin_10s_linear_infinite\] {
    animation: spin 10s linear infinite
}

.animate-\[spin_3s_linear_infinite\] {
    animation: spin 3s linear infinite
}

.animate-\[spin_4s_linear_infinite\] {
    animation: spin 4s linear infinite
}

@keyframes boeing {
    0% {
        rotate: 0deg;
        transform: scale(1)
    }

    30% {
        transform: scale(.85)
    }

    to {
        rotate: 360deg;
        transform: scale(1)
    }
}

.animate-boeing {
    animation: boeing .5s ease-in-out infinite
}

@keyframes spin {
    to {
        transform: rotate(360deg)
    }
}

.animate-spin {
    animation: spin 1s linear infinite
}

.cursor-default {
    cursor: default
}

.cursor-pointer {
    cursor: pointer
}

.select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.list-decimal {
    list-style-type: decimal
}

.grid-cols-3 {
    grid-template-columns: repeat(3,minmax(0,1fr))
}

.flex-col {
    flex-direction: column
}

.flex-wrap {
    flex-wrap: wrap
}

.items-center {
    align-items: center
}

.items-baseline {
    align-items: baseline
}

.justify-end {
    justify-content: flex-end
}

.justify-center {
    justify-content: center
}

.justify-between {
    justify-content: space-between
}

.justify-around {
    justify-content: space-around
}

.gap-0 {
    gap: 0px
}

.gap-0\.5 {
    gap: .125rem
}

.gap-1 {
    gap: .25rem
}

.gap-1\.5 {
    gap: .375rem
}

.gap-2 {
    gap: .5rem
}

.gap-3 {
    gap: .75rem
}

.gap-4 {
    gap: 1rem
}

.gap-8 {
    gap: 2rem
}

.gap-x-2 {
    -moz-column-gap: .5rem;
    column-gap: .5rem
}

.gap-y-0 {
    row-gap: 0px
}

.gap-y-0\.5 {
    row-gap: .125rem
}

.overflow-auto {
    overflow: auto
}

.overflow-hidden {
    overflow: hidden
}

.overflow-y-auto {
    overflow-y: auto
}

.overflow-x-hidden {
    overflow-x: hidden
}

.overflow-y-scroll {
    overflow-y: scroll
}

.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.whitespace-nowrap {
    white-space: nowrap
}

.break-all {
    word-break: break-all
}

.rounded {
    border-radius: .25rem
}

.rounded-2xl {
    border-radius: 1rem
}

.rounded-full {
    border-radius: 9999px
}

.rounded-lg {
    border-radius: .5rem
}

.rounded-xl {
    border-radius: .75rem
}

.border {
    border-width: 1px
}

.border-b {
    border-bottom-width: 1px
}

.border-none {
    border-style: none
}

.border-tg-accent-text-color {
    border-color: var(--tg-theme-accent-text-color, #007aff)
}

.border-tg-section-bg-color {
    border-color: var(--tg-theme-section-bg-color, #282828)
}

.border-tg-text-color {
    border-color: var(--tg-theme-text-color, #ffffff)
}

.border-white\/5 {
    border-color: #ffffff0d
}

.bg-\[\#0098e9\] {
    --tw-bg-opacity: 1;
    background-color: rgb(0 152 233 / var(--tw-bg-opacity))
}

.bg-\[\#161d27\] {
    --tw-bg-opacity: 1;
    background-color: rgb(22 29 39 / var(--tw-bg-opacity))
}

.bg-amber-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(251 191 36 / var(--tw-bg-opacity))
}

.bg-blue-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(59 130 246 / var(--tw-bg-opacity))
}

.bg-lime-400 {
    --tw-bg-opacity: 1;
    background-color: rgb(163 230 53 / var(--tw-bg-opacity))
}

.bg-red-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity))
}

.bg-tg-button-color {
    background-color: var(--tg-theme-button-color, #007aff)
}

.bg-tg-secondary-bg-color {
    background-color: var(--tg-theme-secondary-bg-color, #26262a)
}

.bg-tg-section-bg-color {
    background-color: var(--tg-theme-section-bg-color, #5b5858)
}

.bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity))
}

.bg-white\/5 {
    background-color: #ffffff0d
}

.bg-opacity-75 {
    --tw-bg-opacity: .75
}

.bg-gradient-to-r {
    background-image: linear-gradient(to right,var(--tw-gradient-stops))
}

.from-\[\#2D83EC\] {
    --tw-gradient-from: #2D83EC var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(45 131 236 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

.to-\[\#1AC9FF\] {
    --tw-gradient-to: #1AC9FF var(--tw-gradient-to-position)
}

.fill-tg-text-color {
    fill: var(--tg-theme-text-color, #ffffff)
}

.stroke-white {
    stroke: #fff
}

.p-0 {
    padding: 0
}

.p-1 {
    padding: .25rem
}

.p-2 {
    padding: .5rem
}

.p-3 {
    padding: .75rem
}

.p-4 {
    padding: 1rem
}

.p-6 {
    padding: 1.5rem
}

.px-2 {
    padding-left: .5rem;
    padding-right: .5rem
}

.px-3 {
    padding-left: .75rem;
    padding-right: .75rem
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem
}

.py-1 {
    padding-top: .25rem;
    padding-bottom: .25rem
}

.py-1\.5 {
    padding-top: .375rem;
    padding-bottom: .375rem
}

.py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem
}

.py-2 {
    padding-top: .5rem;
    padding-bottom: .5rem
}

.py-2\.5 {
    padding-top: .625rem;
    padding-bottom: .625rem
}

.py-3 {
    padding-top: .75rem;
    padding-bottom: .75rem
}

.pb-4 {
    padding-bottom: 1rem
}

.pl-3 {
    padding-left: .75rem
}

.pl-4 {
    padding-left: 1rem
}

.pr-10 {
    padding-right: 2.5rem
}

.pr-2 {
    padding-right: .5rem
}

.pr-8 {
    padding-right: 2rem
}

.pt-2 {
    padding-top: .5rem
}

.text-left {
    text-align: left
}

.text-center {
    text-align: center
}

.text-right {
    text-align: right
}

.text-start {
    text-align: start
}

.text-end {
    text-align: end
}

.align-middle {
    vertical-align: middle
}

.font-mono {
    font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace
}

.text-2xl {
    font-size: 1.5rem;
    line-height: 2rem
}

.text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem
}

.text-\[12px\] {
    font-size: 12px
}

.text-base {
    font-size: 1rem;
    line-height: 1.5rem
}

.text-base\/7 {
    font-size: 1rem;
    line-height: 1.75rem
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem
}

.text-sm {
    font-size: .875rem;
    line-height: 1.25rem
}

.text-sm\/6 {
    font-size: .875rem;
    line-height: 1.5rem
}

.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
}

.text-xs {
    font-size: .75rem;
    line-height: 1rem
}

.font-black {
    font-weight: 900
}

.font-bold {
    font-weight: 700
}

.font-extrabold {
    font-weight: 800
}

.font-light {
    font-weight: 300
}

.font-medium {
    font-weight: 500
}

.font-semibold {
    font-weight: 600
}

.text-amber-400 {
    --tw-text-opacity: 1;
    color: rgb(251 191 36 / var(--tw-text-opacity))
}

.text-black {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity))
}

.text-green-500 {
    --tw-text-opacity: 1;
    color: rgb(34 197 94 / var(--tw-text-opacity))
}

.text-red-500 {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity))
}

.text-tg-accent-text-color {
    color: var(--tg-theme-accent-text-color, #007aff)
}

.text-tg-button-text-color {
    color: var(--tg-theme-button-text-color, #ffffff)
}

.text-tg-text-color {
    color: #fff;
}
.textcolor{
color:#fff;
}
.text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}

.text-white\/50 {
    color: #ffffff80
}

.opacity-0 {
    opacity: 0
}

.opacity-10 {
    opacity: .1
}

.opacity-100 {
    opacity: 1
}

.opacity-35 {
    opacity: .35
}

.opacity-50 {
    opacity: .5
}

.opacity-55 {
    opacity: .55
}

.opacity-60 {
    opacity: .6
}

.opacity-65 {
    opacity: .65
}

.opacity-80 {
    opacity: .8
}

.mix-blend-overlay {
    mix-blend-mode: overlay
}

.shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)
}

.shadow-\[0px_2px_3px_-1px_rgba\(0\,0\,0\,0\.1\)\,0px_1px_0px_0px_rgba\(25\,28\,33\,0\.02\)\,0px_0px_0px_1px_rgba\(25\,28\,33\,0\.08\)\] {
    --tw-shadow: 0px 2px 3px -1px rgba(0,0,0,.1),0px 1px 0px 0px rgba(25,28,33,.02),0px 0px 0px 1px rgba(25,28,33,.08);
    --tw-shadow-colored: 0px 2px 3px -1px var(--tw-shadow-color), 0px 1px 0px 0px var(--tw-shadow-color), 0px 0px 0px 1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)
}

.shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)
}

.ring-1 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)
}

.ring-tg-secondary-bg-color {
    --tw-ring-color: var(--tg-theme-secondary-bg-color, #1c1c1c)
}

.blur-\[10px\] {
    --tw-blur: blur(10px);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.filter {
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}

.backdrop-blur-sm {
    --tw-backdrop-blur: blur(4px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
}

.transition {
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s
}

.transition-opacity {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s
}

.duration-100 {
    transition-duration: .1s
}

.duration-200 {
    transition-duration: .2s
}

.duration-300 {
    transition-duration: .3s
}

.ease-in {
    transition-timing-function: cubic-bezier(.4,0,1,1)
}

.ease-in-out {
    transition-timing-function: cubic-bezier(.4,0,.2,1)
}

.ease-out {
    transition-timing-function: cubic-bezier(0,0,.2,1)
}

.\[--anchor-gap\: var\(--spacing-1\)\] {
    --anchor-gap: var(--spacing-1)
}

@font-face {
    font-family: San Francisco;
    font-weight: 400;
    src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff)
}

:root {
    font-family: Inter,system-ui,Avenir,Helvetica,Arial,-apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Lucida Grande,sans-serif;
    line-height: 1.5;
    font-weight: 400;
    background-color: var(--tg-theme-secondary-bg-color, #1c1c1c);
    color: var(--tg-theme-text-color, #ffffff);
    color-scheme: var(--tg-color-scheme);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

#root {
    overflow-y: auto;
    min-height: 100vh
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

body {
    margin: 0
}

body::-webkit-scrollbar {
    width: 0;
    background-color: transparent
}

button[disabled] {
    opacity: .6;
    cursor: auto;
    pointer-events: none
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none
}

@keyframes blink {
    0% {
        opacity: 0
    }

    50% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.dot-1 {
    animation: blink 1.4s infinite .2s
}

.dot-2 {
    animation: blink 1.4s infinite .4s
}

.dot-3 {
    animation: blink 1.4s infinite .6s
}

.gold-text {
    background: linear-gradient(180deg,#fbcc54,#fff4d6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff4d6;
    filter: drop-shadow(0px 1px 2px black);
    text-shadow: none!important
}

.orange-text {
    background: linear-gradient(180deg,tomato,#ffcccb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #ffcccb;
    filter: drop-shadow(0px 1px 2px gray);
    text-shadow: none!important
}

.hover\:bg-blue-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(29 78 216 / var(--tw-bg-opacity))
}

.focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}

.active\:scale-90:active {
    --tw-scale-x: .9;
    --tw-scale-y: .9;
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.active\:scale-95:active {
    --tw-scale-x: .95;
    --tw-scale-y: .95;
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.active\:text-tg-accent-text-color:active {
    color: var(--tg-theme-accent-text-color, #007aff)
}

.active\:opacity-50:active {
    opacity: .5
}

.group:active .group-active\:scale-90 {
    --tw-scale-x: .9;
    --tw-scale-y: .9;
    transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.data-\[checked\]\:bg-tg-accent-text-color[data-checked] {
    background-color: var(--tg-theme-accent-text-color, #007aff)
}

.data-\[focus\]\:bg-tg-secondary-bg-color[data-focus],.data-\[selected\]\:bg-tg-secondary-bg-color[data-selected] {
    background-color: var(--tg-theme-secondary-bg-color, #1c1c1c)
}

.data-\[focus\]\:outline-2[data-focus] {
    outline-width: 2px
}

.data-\[focus\]\:-outline-offset-2[data-focus] {
    outline-offset: -2px
}

.data-\[focus\]\:outline-tg-accent-text-color[data-focus] {
    outline-color: var(--tg-theme-accent-text-color, #007aff)
}

.data-\[focus\]\:outline-white\/25[data-focus] {
    outline-color: #ffffff40
}

.group[data-selected] .group-data-\[selected\]\:visible {
    visibility: visible
}

.group[data-checked] .group-data-\[checked\]\:opacity-100 {
    opacity: 1
}

.\[\&_tr\:last-child\]\:border-b tr:last-child {
    border-bottom-width: 1px
}

.\[\&_tr\]\:border-b tr {
    border-bottom-width: 1px
}

            `}</style>
      <div className="my-4">
        <div className="mb-4 w-full flex flex-col items-center justify-center">
          <div className="mb-2 text-2xl font-bold text-tg-text-color ">
            New Missions
          </div>
          <p className="text-sm text-center textcolor">
            Complete tasks and earn more
          </p>
        </div>
      </div>
      <div className="task-ref-button">
        <thead>
          <tr className="table-th">
            <Link to="/mission">
              <th className="task-ref">Task</th>
            </Link>
            <Link to="/task">
              <th className="task-ref">Ref</th>
            </Link>
            <Link to="/special">
              <th className="task-ref">Content</th>
            </Link>
          </tr>
        </thead>
      </div>
      <h1 className="text-center text-2xl font-bold textcolor">
        Tell others about TRONOX App
      </h1>
      <div className="my-4 flex justify-center">
        <img src={Instagram} alt="Instagram" />
        <img src={YouTube} alt="YouTube" />
        <img src={TikTok} alt="TikTok" />
      </div>
      <div>
        <hr className="border-tg-accent-text-color my-3 opacity-60 mx-10" />
        <Link to="/verificationForm">
          <button className="shadow mt-4 flex gap-2 items-center justify-center mx-auto bg-tg-button-color text-tg-button-text-color rounded-xl min-w-fit py-2 px-3 active:scale-95 transform transition-all">
            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
            <div className="text-sm font-medium">Earn by Facebook</div>
          </button>
        </Link>
        <div className="text-center text-sm textcolor">And get up to</div>
        <div className="flex gap-2 justify-center items-center -ml-6">
          <img src={fanImage} alt="TRONOX" className="w-7 h-7" />
          <span className="font-bold text-2xl gold-text">{reward.reward}</span>
        </div>
        <div className="text-center text-sm textcolor">TRX for each video</div>
        <hr className="border-tg-accent-text-color my-3 opacity-60 mx-10" />
        <Link to="/verificationForm">
          <button className="shadow mt-4 flex gap-2 items-center justify-center mx-auto bg-tg-button-color text-tg-button-text-color rounded-xl min-w-fit py-2 px-3 active:scale-95 transform transition-all">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="w-5 h-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
            <div className="text-sm font-medium">Add Content and Earn</div>
          </button>
        </Link>
      </div>

      <div className="my-4 bg-tg-section-bg-color rounded-2xl flex flex-col py-2">
        <h2 className="text-center font-bold text-2xl">Rules</h2>
        <ul className="mx-8 list-decimal">
          <li className="text-sm/6 opacity-60">
            <b>Create Content:</b> Make a fan video about TRONOX App for YouTube
            Shorts, Instagram Reels, or TikTok.
          </li>
          <li className="text-sm/6 opacity-60">
            <b>Include your ID or Invite Link:</b> Attach your ID or invite link
            in the video description.
          </li>
          <div className="flex items-center w-full gap-1 justify-around my-2">
            <div className="bg-tg-secondary-bg-color rounded-lg p-3 items-center flex flex-col gap-1 flex-grow">
              <div className="text-sm text-center">
                Get Your Invite Link on Friends section
              </div>
            </div>
          </div>
          <li className="text-sm/6 opacity-60">
            <b>Send the Link:</b> Once your video reaches 100+ views, send us
            the link.
          </li>
          <li className="text-sm/6 opacity-60">
            <b>Earn Rewards:</b> The more views your video gets, the better your
            reward. You can earn up to{" "}
            <span className="font-bold text-tg-text-color"> 100 Trx</span> for a
            single video.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Special;
