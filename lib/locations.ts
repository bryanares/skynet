export type Region = keyof typeof LOCATIONS;

export const LOCATIONS = {
  Nairobi: ['Westlands', 'Upperhill', 'Karen', 'Thika Road'],
  // Add more regions here without any code changes — data-driven
  // Mombasa: ['Nyali', 'Bamburi', 'Shanzu', 'Likoni'],
  // Nakuru: ['Milimani', 'Section 58', 'Nakuru Town', 'Lanet'],
} as const;

export const REGIONS = Object.keys(LOCATIONS) as Region[];

export function getLocations(region: Region): readonly string[] {
  return LOCATIONS[region];
}
