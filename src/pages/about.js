import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../layout/MainLayout";
import Seo from "../components/seo";
import TimeStampSection from "../components/timestamp-section";
import "./about.scss";

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { about } = metaData;
  const { timestamps } = about;

  const [category, setCategory] = useState("All");
  const [formatList, setFormatList] = useState(timestamps);

  const dummy = {
    date: "",
    activity: "",
    category: "",
    links: {
      github: "",
      post: "",
      googlePlay: "",
      appStore: "",
      demo: "",
    },
  };

  const filterData = (value) => {
    let filtered;

    if (value === "All") {
      filtered = timestamps;
    } else {
      filtered = timestamps.filter((el) => el.category === value);
    }
    setFormatList([dummy, ...filtered]);
    setCategory(value);
  };

  const buttonList = [
    {
      name: "전체",
      label: "All",
      onClick: () => filterData("All"),
    },
    {
      name: "프로젝트",
      label: "project",
      onClick: () => filterData("project"),
    },
    {
      name: "업무",
      label: "work",
      onClick: () => filterData("work"),
    },
    {
      name: "대외활동",
      label: "activity",
      onClick: () => filterData("activity"),
    },
    {
      name: "기타",
      label: "etc",
      onClick: () => filterData("etc"),
    },
  ];

  return (
    <Layout>
      <Seo title="About" />
      <div className="navigation-container">
        {buttonList.map((item) => (
          <button
            onClick={item.onClick}
            className={item.label === category ? "active-category" : ""}
          >
            {item.name}
          </button>
        ))}
      </div>
      <TimeStampSection timestamps={formatList} />
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          timestamps {
            date
            activity
            category
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
