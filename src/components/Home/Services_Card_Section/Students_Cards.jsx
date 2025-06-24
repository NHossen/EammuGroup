import { useEffect, useState } from "react";
import Student_Visa from "./Student_visa/Student_Visa";

const Students_Cards = () => {
  const [students, setStudents] = useState([]);
  const [dataLength, setDataLength] = useState(3);

  useEffect(() => {
    fetch("/studentvisa.json") // fetching from your file
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Failed to fetch data:", error));
  }, []);

  return (
    <div className="px-4 container mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#005a31] my-6">
        Best Countries for Higher Studies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.slice(0, dataLength).map((student) => (
          <Student_Visa key={student.id} student={student} />
        ))}
      </div>

      {dataLength < students.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setDataLength(students.length)}
            className="btn text-lg font-semibold text-[#005a31] border border-[#005a31] bg-white hover:bg-[#005a31] hover:text-white hover:shadow-md hover:shadow-[#122712] transition-all duration-300 px-6 py-2 rounded-md"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Students_Cards;
