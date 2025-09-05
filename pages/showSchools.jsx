import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../lib/db";

export default function ShowSchools({ schools }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Schools List</h2>
      <div className="row">
        {schools.map((s) => (
          <div key={s.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card shadow h-100">
              <img
                src={`/schoolImages/${s.image}`}
                className="card-img-top"
                alt={s.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{s.name}</h5>
                <p className="card-text">{s.address}, {s.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fetch data on server-side
export async function getServerSideProps() {
  const [rows] = await db.query("SELECT id, name, address, city, image FROM schools");
  return { props: { schools: JSON.parse(JSON.stringify(rows)) } };
}
