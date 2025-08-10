import { useState } from "react";

const categories = ["Water", "Food", "Health", "Security", "Other"];

export default function SubmitComplaint() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      alert("Please select a category");
      return;
    }
    if (!description.trim()) {
      alert("Please enter complaint details");
      return;
    }

    const complaintData = {
      category,
      description,
      anonymous,
      submittedAt: new Date().toISOString(),
    };

    console.log("Complaint submitted:", complaintData);
    alert("Complaint submitted successfully!");

    setCategory("");
    setDescription("");
    setAnonymous(false);
  };

  return (
    <section className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 my-12">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-700 text-center">
        Submit a Complaint
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <label className="flex flex-col text-gray-700 text-sm">
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 p-3 border rounded-md focus:outline-indigo-500"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col text-gray-700 text-sm">
          Complaint Details
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            placeholder="Describe your issue..."
            className="mt-2 p-3 border rounded-md resize-y focus:outline-indigo-500"
          />
        </label>

        <label className="inline-flex items-center gap-3 text-gray-700 text-sm">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          Submit anonymously
        </label>

        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Submit Complaint
        </button>
      </form>
    </section>
  );
}
