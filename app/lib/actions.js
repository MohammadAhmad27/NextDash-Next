"use server"
import { revalidatePath } from "next/cache";
import { Product, User } from "./model";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

//add user
export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
    try {
        await connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });
        await newUser.save();
        console.log("User Created:", newUser)
    } catch (error) {
        console.log(error);
        throw new Error('Failed to add user!');
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

//add product
export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData);
    try {
        await connectToDB();
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });
        await newProduct.save();
        console.log("Product Created:", newProduct)
    } catch (error) {
        console.log(error);
        throw new Error('Failed to add product!');
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

//delete product
export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        await connectToDB();
        const deletedProduct = await Product.findByIdAndDelete(id);
        console.log("Product deleted successfully:", deletedProduct);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete product!');
    }
    revalidatePath("/dashboard/products");
};

//delete user
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
        await connectToDB();
        const deletedUser = await User.findByIdAndDelete(id);
        console.log("User deleted successfully:", deletedUser);
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete user!');
    }
    revalidatePath("/dashboard/users");
};

//update user
export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

//update product
export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to update product!");
    }
  
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  };
  