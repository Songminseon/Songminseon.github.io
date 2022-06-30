import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../layout/MainLayout";
import Seo from "../components/seo";
import Bio from "../components/bio";

import ProjectSection from "../components/project-section";
import "./portfolio.scss";
import "./about.scss";

function PortfolioPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { about } = metaData;
  const { projects } = about;

  const [category, setCategory] = useState("All");
  const [formatList, setFormatList] = useState(projects);

  const dummy = {
    title: "",
    category: "",
    date: "",
    description: "",
    techStack: ["", ""],
    thumbnailUrl: "",
    links: {
      post: "/",
      github: "",
      demo: "",
    },
  };

  const filterData = (value) => {
    let filtered;

    if (value === "All") {
      filtered = projects;
      setFormatList(filtered);
    } else {
      filtered = projects.filter((el) => el.category === value);
      setFormatList([dummy, ...filtered]);
    }
    setCategory(value);
  };

  const buttonList = [
    {
      name: "전체",
      label: "All",
      onClick: () => filterData("All"),
    },
    {
      name: "출시프로젝트",
      label: "main",
      onClick: () => filterData("main"),
    },
    {
      name: "사이드프로젝트",
      label: "side",
      onClick: () => filterData("side"),
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
      <ProjectSection projects={formatList} />
    </Layout>
  );
}

export default PortfolioPage;

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
            category
            date
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
