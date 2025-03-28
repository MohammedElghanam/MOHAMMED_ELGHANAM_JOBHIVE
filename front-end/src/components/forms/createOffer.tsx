import { useState } from "react";
import useCreateOffer from "../../hooks/useCreateOffer";

export default function CreateOfferForm() {
    

      const { formData, setFormData, createOffer, loading, error } = useCreateOffer();

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        
        await createOffer(formData);
      };
    

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Create a New Offer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">Offer Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="contract">Contract Type</label>
          <input
            type="text"
            id="contract"
            name="contract"
            value={formData.contract}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="lieu">Location</label>
          <input
            type="text"
            id="lieu"
            name="lieu"
            value={formData.lieu}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="lieu">Technologies</label>
            <select
                multiple
                value={formData.technologies}
                onChange={(e) => {
                    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                    setFormData((prev) => ({
                    ...prev,
                    technologies: selectedOptions as string[], // Explicitly cast to string[]
                    }));
                }}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                {["React", "Node.js", "Angular", "Vue.js", "Python", "Django"].map((tech) => (
                    <option key={tech} value={tech}>
                    {tech}
                    </option>
                ))}
            </select>
        </div>




        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Create Offer
          </button>
        </div>
      </form>
    </div>
  );
}
