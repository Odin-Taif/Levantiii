//--=-=-= here we define our typings to be used through out our application.

interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _ref: string;
  _type: "category";
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}
interface Product {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _ref: string;
  _type: "products";
  title: string;
  price: number;

  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}

interface Meal {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _ref: string;
  _type: "products";
  title: string;
  price: number;

  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}

interface ExistedUser {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  mobile?: string;
  imgUploaded?: string;
}

interface SocialMedialLink {
  linkName: string;
}
