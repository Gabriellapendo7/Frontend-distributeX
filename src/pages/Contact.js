import React from "react";

export default function Contact() {
    return (
        <div className="py-14 sm:py-14 bg-gray-100 flex flex-col justify-center items-center px-6 sm:px-12">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-12 w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 sm:text-3xl">
                    Contact Us
                </h1>
                <div className="contact-info space-y-2 text-gray-600">
                    <p className="font-semibold text-lg">
                        Distribute-X Company
                    </p>
                    <p>Ngong Lane</p>
                    <p>Ngong Road</p>
                    <p>Moringa</p>
                    <p>
                        <strong>Email:</strong> dandobrandon0@gmail.com

                    </p>
                    <p>
                        <strong>Phone:</strong> +254 112 607 179
                    </p>
                    <p>
                        {/* support us */}
                    </p>
                </div>
            </div>
        </div>
    );
}
