import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from "../components/Globals/Banner"
import MiniMe from "../components/Globals/MiniMe"
import About from "../components/Globals/About"
import WorkExperience from "../components/Globals/WorkExperience"
import ProjectSection from "../Home/ProjectSection"



const IndexPage = ({data}) => (
  <Layout>
    <Banner image_toDisplay={data.bannerImage.childImageSharp.fluid} />
    <MiniMe image_toDisplay={data.miniMe.childImageSharp.fixed} />
    <SEO title="Home" />
    
    <About />
    <WorkExperience />

    <ProjectSection items={data.projectsFromCMS} />
  </Layout>
)

export const query = graphql`
{
    bannerImage: file(relativePath: {eq: "Untitled.png"}){
      childImageSharp{
        fluid (quality:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
    miniMe : file(relativePath: {eq: "miniMe2.png"}){
      childImageSharp{
        fixed (width:300, height:300){
          ...GatsbyImageSharpFixed
        }
      }
    }
    projectsFromCMS: allContentfulProjectBrief{
      edges{
       node{
          id
          projectTitle
          projectTechnologies
          projectBrief
          projectMainMediaField{
            fixed (width:300){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          currentProjectLink
       }
      }
    }
}`;

export default IndexPage
