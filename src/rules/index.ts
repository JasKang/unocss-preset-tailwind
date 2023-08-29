import type { Rule, Shortcut } from '@unocss/core'

import type { FullTheme } from '../theme'
import { container, containerShortcuts } from './container'
import {
  alignContent,
  alignItems,
  alignSelf,
  aspectRatio,
  boxDecorationBreak,
  boxSizing,
  breakAfter,
  breakBefore,
  breakInside,
  clear,
  columns,
  display,
  flex,
  flexBasic,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  floats,
  gap,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridRow,
  gridTemplateColumns,
  gridTemplateRows,
  inset,
  isolation,
  justifyContent,
  justifyItems,
  justifySelf,
  margin,
  objectFit,
  objectPosition,
  order,
  overflow,
  overscrollBehavior,
  padding,
  placeContent,
  placeItems,
  placeSelf,
  position,
  visibility,
  zIndex,
} from './simples'
import { spaceBetween } from './space'

export const rules: Rule<FullTheme>[] = [
  // Layout
  ...aspectRatio,
  container,
  ...columns,
  ...breakAfter,
  ...breakBefore,
  ...breakInside,
  ...boxDecorationBreak,
  ...boxSizing,
  ...display,
  ...floats,
  ...clear,
  ...isolation,
  ...objectFit,
  ...objectPosition,
  ...overflow,
  ...overscrollBehavior,
  ...position,
  ...inset,
  ...visibility,
  ...zIndex,
  // Flexbox & Grid
  ...flexBasic,
  ...flexDirection,
  ...flexWrap,
  ...flex,
  ...flexGrow,
  ...flexShrink,
  ...order,
  ...gridTemplateColumns,
  ...gridColumn,
  ...gridTemplateRows,
  ...gridRow,
  ...gridAutoFlow,
  ...gridAutoColumns,
  ...gridAutoRows,
  ...gap,
  ...justifyContent,
  ...justifyItems,
  ...justifySelf,
  ...alignContent,
  ...alignItems,
  ...alignSelf,
  ...placeContent,
  ...placeItems,
  ...placeSelf,
  // Spacing
  ...padding,
  ...margin,
  ...spaceBetween,
  // Sizing
]

export const shortcuts: Shortcut<FullTheme>[] = [containerShortcuts]
