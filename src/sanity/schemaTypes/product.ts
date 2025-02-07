
  

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'productName',
      title: 'Name',
      type: 'string',
    },
    {
              name:"slug",
             type:"slug",
             title:"Slug",
               options :{
                 source :"name"
              }
             },
    {
      name: 'imagePath',
      title: 'Image Path',
      type: 'url',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};




// import { title } from "process";

// export default {
//     name: 'product',
//     type: 'document',
//     title: 'Product',
//     fields: [
//       {
//         name: 'productName',
//         type: 'string',
//         title: 'Name',
//       },
//       {
//         name: 'inventry',
//         type: 'string',
//         title: 'Inventry',
//       },
//       {
//         name :"id",
//         type:"string",
//         title:"Id"
//       },
//       {
//         name:"slug",
//         type:"slug",
//         title:"Slug",
//         options :{
//           source :"name"
//         }
//       },

//       {
//         name: 'image',
//         type: 'image',
//         title: 'Image',
//         options: {
//           hotspot: true, // Enable image cropping
//         },
//       },
//       {
//         name: 'price',
//         type: 'number',
//         title: 'Price',
//       },
//       {
//         name: 'description',
//         type: 'text',
//         title: 'Description',
//       },
//       {
//         name: 'discountPercentage',
//         type: 'number',
//         title: 'Discount Percentage',
//       },
//       {
//         name: 'isFeaturedProduct',
//         type: 'boolean',
//         title: 'Featured Product',
//       },
//       {
//         name: 'stockLevel',
//         type: 'number',
//         title: 'Stock Level',
//       },
//       {
//         name: 'category',
//         type: 'string',
//         title: 'Category',
//       },
//     ],
//   };