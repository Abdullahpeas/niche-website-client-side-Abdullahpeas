import React from 'react';
import { useForm } from 'react-hook-form';
const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch("https://desolate-chamber-46728.herokuapp.com/explore", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Foods Added Successfully")
                    reset();
                }
            })

    };

    return (
        <div>
            <h3 className="mt-5">Add product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="m-2 w-25 text-center d-flex mx-auto" defaultValue="" {...register("name")} placeholder="Drone Name" />


                <input className="m-2 text-center w-25 d-flex mx-auto" defaultValue="" {...register("price")} placeholder="Drone price" />

                <input className="m-2 text-center d-flex mx-auto p-3" defaultValue="" {...register("desc")} placeholder="Drone Description" />


                <input className="m-2 w-25 text-center d-flex mx-auto" placeholder="image url" defaultValue="" {...register("img")} />


                <input className="m-2 text-center d-flex mx-auto btn btn-success" type="submit" />

            </form>
        </div>
    );
};

export default AddAProduct;