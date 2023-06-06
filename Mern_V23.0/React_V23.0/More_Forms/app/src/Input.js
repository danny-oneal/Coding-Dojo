import React from "react";

const Input = ({ type = "text", name, value, onChange, error, label }) => {
    return (
        <label className="grid grid-cols-2 bg-slate-400 rounded mb-4 p-3">
            <span className="text-gray-700 mr-4">{label}</span>
            <div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </label>
    );
};

export default Input;
