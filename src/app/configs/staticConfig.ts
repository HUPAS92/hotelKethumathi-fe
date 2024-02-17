export const USER_ROLES = [
  { id: 1, name: "Admin", key: "ADMIN" },
  { id: 2, name: "Guest", key: "GUEST" },
  { id: 3, name: "Manager", key: "MANAGER" },
  { id: 4, name: "Receptionist", key: "RECEPTIONIST" },
  { id: 5, name: "Waiter", key: "WAITER" },
  { id: 6, name: "House Keeper", key: "HOUSE_KEEPER" },
];

export const COMMON_STATUSES = ["true", "false"];

export const getDataByKey = (key: string, data: any) => {
  return data?.find((state: { key: string }) => state.key === key) || null;
};

export const FACILITY_CATEGORIES = [
  { id: 1, name: "Confort and Convenience", key: "COMFORT_AND_CONVENIENCE" },
  { id: 2, name: "Essentials", key: "ESSENTIALS" },
  {
    id: 3,
    name: "Technology and Entertainment",
    key: "TECHNOLOGY_AND_ENTERTAINMENT",
  },
  { id: 4, name: "Hospitality and Extras", key: "HOSPITALITY_AND_EXTRAS" },
  { id: 5, name: "Safety and Security", key: "SAFETY_AND_SECURITY" },
  { id: 6, name: "Accessibility", key: "ACCESSIBILITY" },
  { id: 7, name: "Customized Amentities", key: "CUSTOMIZED_AMENITIES" },
];

export const ROOM_FLOORS = [
  { id: 1, name: "Ground Floor", key: "GROUND" },
  { id: 2, name: "First Floor", key: "FIRST" },
  { id: 3, name: "Second Floor", key: "SECOND" },
];

export const ROOM_STATUSES = [
  { id: 1, name: "Vacant", key: "VACANT" },
  { id: 2, name: "Occupied", key: "OCCUPIED" },
];

export const AUTH_USER = JSON.parse(localStorage.getItem("user") || "{}");
