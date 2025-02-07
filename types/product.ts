export interface Product {
    _id:string;
    name:string;
    
    _type :"product";
    inventry:number;
    image?:{
        asset:{
            ref:string;
            type:"image"
        }
    }
    price:number;
    description?:string;
    slug:{
        _type:"slug";
        current:string
        
    };
}