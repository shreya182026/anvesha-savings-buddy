```ts
export type StateUT = {
  name: string;
  languages: string[];
};

export const STATES_AND_UTS: StateUT[] = [
  { name: "Andhra Pradesh", languages: ["te", "hi", "en"] },
  { name: "Arunachal Pradesh", languages: ["en", "hi", "as"] },
  { name: "Assam", languages: ["as", "bn", "hi"] },
  { name: "Bihar", languages: ["hi", "ur", "en"] },
  { name: "Chhattisgarh", languages: ["hi", "or", "en"] },
  { name: "Goa", languages: ["kok", "mr", "en"] },
  { name: "Gujarat", languages: ["gu", "hi", "en"] },
  { name: "Haryana", languages: ["hi", "pa", "en"] },
  { name: "Himachal Pradesh", languages: ["hi", "pa", "en"] },
  { name: "Jharkhand", languages: ["hi", "bn", "or"] },
  { name: "Karnataka", languages: ["kn", "en", "hi"] },
  { name: "Kerala", languages: ["ml", "en", "ta"] },
  { name: "Madhya Pradesh", languages: ["hi", "en", "mr"] },
  { name: "Maharashtra", languages: ["mr", "hi", "gu"] },
  { name: "Manipur", languages: ["en", "hi", "bn"] },
  { name: "Meghalaya", languages: ["en", "as", "bn"] },
  { name: "Mizoram", languages: ["en", "hi", "bn"] },
  { name: "Nagaland", languages: ["en", "hi", "as"] },
  { name: "Odisha", languages: ["or", "hi", "bn"] },
  { name: "Punjab", languages: ["pa", "hi", "en"] },
  { name: "Rajasthan", languages: ["hi", "en", "gu"] },
  { name: "Sikkim", languages: ["ne", "en", "hi"] },
  { name: "Tamil Nadu", languages: ["ta", "en", "te"] },
  { name: "Telangana", languages: ["te", "ur", "hi"] },
  { name: "Tripura", languages: ["bn", "kok", "hi"] },
  { name: "Uttar Pradesh", languages: ["hi", "ur", "en"] },
  { name: "Uttarakhand", languages: ["hi", "en", "pa"] },
  { name: "West Bengal", languages: ["bn", "hi", "ne"] },

  { name: "Andaman and Nicobar Islands", languages: ["hi", "en", "bn"] },
  { name: "Chandigarh", languages: ["hi", "pa", "en"] },
  { name: "Dadra and Nagar Haveli and Daman and Diu", languages: ["gu", "hi", "mr"] },
  { name: "Delhi", languages: ["hi", "pa", "ur"] },
  { name: "Jammu and Kashmir", languages: ["ur", "hi", "pa"] },
  { name: "Ladakh", languages: ["hi", "ur", "en"] },
  { name: "Lakshadweep", languages: ["ml", "en", "hi"] },
  { name: "Puducherry", languages: ["ta", "te", "ml"] },
];

export function getStateData(stateName: string): StateUT | undefined {
  return STATES_AND_UTS.find(
    (state) => state.name.toLowerCase() === stateName.toLowerCase()
  );
}
```
