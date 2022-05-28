import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Fetch from "../Api/Fetch";
import Footer from "./Shared/Footer";

const Parts = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const { data, isLoading } = useQuery("order", () => {
        Fetch(`/services/${id}`)
            .then(response => {
                console.log(response);
            });

    });

    if (isLoading) {
        return <p>loading...</p>
    }


    const onSubmit = (data) => {
        const quantity = watch("min_order");
        const order = {
            name: user?.displayName,
            email: user?.email,
            price: service?.price,
            order: quantity,
            productName: service?.name,
        };

    };

    return (
        <div className="">

            <div className="md:flex justify-evenly  items-center mt-20">
                <div className="">
                    <img
                        style={{ width: "250px", height: "300px" }}
                        className="max-w-sm lg:max-w-lg mx-auto"
                        src={service.img}
                        alt=""
                    />
                    <div className="items-center">
                        <h2 className="text-2xl">Name: {service.name}</h2>
                        <p className="font-bold">price:{`$${service.price}`}</p>
                        <p className="font-bold">Available:{service.available}</p>
                        <p className="font-bold">Minimum order:{service.minimum_order}</p>
                    </div>
                </div>
                <div className="shadow-2xl px-16 py-10  lg:w-96">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                readOnly
                                placeholder={user?.displayName}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                placeholder={user?.email}
                                readOnly
                                className="input input-bordered w-full sm:max-w-xs"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Available</span>
                            </label>
                            <input
                                placeholder={`Available ${service?.name} ${service?.available} piece`}
                                readOnly
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimum Order</span>
                            </label>
                            <input
                                {...register("min_order", {
                                    required: {
                                        value: true,
                                        message: "minimum order required",
                                    },
                                })}
                                placeholder={`Minimum order ${service?.minimum_order} piece`}
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {parseInt(service?.Available) < parseInt(watch().min_order) ? (
                                    <span className="text-red-700 text-xs">
                                        You can not order more than stock
                                    </span>
                                ) : parseInt(service?.minimum_order) >
                                    parseInt(watch().min_order) ? (
                                    <span className="text-red-700 text-xs">
                                        You can not order less than minimum order
                                    </span>
                                ) : (
                                    ""
                                )}
                                {errors.min_order?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.min_order.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price(per piece)</span>
                            </label>
                            <input
                                readOnly
                                placeholder={` $${service?.price}`}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div class="form-control mt-6">
                            {parseInt(service?.Available) < parseInt(watch().min_order) ||
                                parseInt(service?.minimum_order) > parseInt(watch().min_order) ? (
                                <button disabled className="btn bg-black">
                                    Book Now
                                </button>
                            ) : (
                                <button className="btn btn-primary">Book Now</button>
                            )}
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Parts;