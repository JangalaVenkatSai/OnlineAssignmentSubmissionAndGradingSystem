// AnalyzeCourse.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import "./dstyle.css"; // Import your CSS styles

function AnalyzeCourse() {
  const { courseId } = useParams(); // Get course ID from URL params
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/assessment?course_id=${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        setAssessments(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [courseId]);

  const columns = [
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "Marks",
      dataIndex: "marks",
      key: "marks",
    },
  ];

  return (
    <div>
      <h2>Course Analysis</h2>
      <Table dataSource={assessments} columns={columns} rowKey="id" />
    </div>
  );
}

export default AnalyzeCourse;
