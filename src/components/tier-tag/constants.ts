const VALID_TIERS = ['ultimate' , 'mythic' , 'legend' , 'rare'] as const

export const validateTier = (tier: string): tier is typeof VALID_TIERS[number] => {
  return (VALID_TIERS as readonly string[]).includes(tier);
}