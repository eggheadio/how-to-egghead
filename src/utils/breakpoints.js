const maxSM = 768
const maxMD = 920
const maxLG = 1024

export const bpMaxSM = `@media (max-width: ${maxSM - 1}px)`
export const bpMaxMD = `@media (max-width: ${maxMD - 1}px)`
export const bpMinLG = `@media (min-width: ${maxLG}px)`

export const bpTabletOnly = `@media (min-width: ${maxSM}px) and (max-width: ${maxMD -
  1}px)`
export const bpDesktopOnly = `@media (min-width: ${maxMD}px)`
