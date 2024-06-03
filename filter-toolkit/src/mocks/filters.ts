export const PLPFilter = {
  filters: [
    {
      type: "dropdown",
      name: "Family",
      key: "family",
      multi: true,
      values: [
        {
          name: "LACTO",
          code: "lacto",
        },
        {
          name: "7 Fleurs",
          code: "7_fleurs",
        },
        {
          name: "Nubian Heritage",
          code: "nubian_heritage",
        },
      ],
    },
    {
      type: "dropdown",
      name: "Product Type",
      key: "family_product_type",
      multi: true,
      values: [
        {
          name: "Apparel - Blazers & Suits",
          code: "apparel---blazers_suits",
        },
        {
          name: "Apparel - Bottoms",
          code: "apparel---bottoms",
        },
        {
          name: "Apparel - Cardigans & Sweaters",
          code: "apparel---cardigans_sweaters",
        },
      ],
    },
    {
      type: "dropdown",
      name: "Status",
      key: "status",
      multi: false,
      values: [
        {
          name: "Active",
          code: "active",
        },
        {
          name: "Inactive",
          code: "inactive",
        },
      ],
    },
  ],
};
