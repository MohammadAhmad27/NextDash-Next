import { Product, User } from "./model";
import { connectToDB } from "./utils";

export const fetchUsers = async ({ q, page }) => {
    const regex = new RegExp(q, "i");
    const itemPerPage = 2;
    try {
        await connectToDB();
        const count = await User.countDocuments({ username: { $regex: regex } });
        const users = await User.find({ username: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page - 1));
        return { count, users };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch users');
    }
}


export const fetchProducts = async ({ q, page }) => {
    const regex = new RegExp(q, "i");
    const itemPerPage = 2;
    try {
        await connectToDB();
        const count = await Product.countDocuments({ title: { $regex: regex } });
        const products = await Product.find({ title: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page - 1));
        return { count, products };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch products');
    }
}