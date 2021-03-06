import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ProjectContent from "../Home/ProjectContent"

const IndexPage = ({data}) => (
  <Layout>
    
    <SEO title="Home" />
    <ProjectContent items={data.projectPortofolio.edges[0]} />

  </Layout>
)

export const portofolioProjectQuery = graphql`
{
    projectPortofolio: allContentfulProjectBrief{
        edges{
         node{
             id
            projectTitle
            projectTechnologies
            projectBrief
            projectMainMediaField{
                fluid (quality:100){
                    ...GatsbyContentfulFluid_tracedSVG
                }
              }
            projectDiscoveryPhase{
                projectDiscoveryPhase
            }
            projectDiscoveryPhaseMedia{
              fluid (quality:100){
                  ...GatsbyContentfulFluid_tracedSVG
              }
            }
            projectArchitecture{
				      projectArchitecture
            }
            projectArchitectureMedia{
              fluid (quality:100){
                  ...GatsbyContentfulFluid_tracedSVG
              }
            }
            projectLearningOutcome{
                projectLearningOutcome
            }
            nextProjectLink
         }
        }
    }
}`;

export default IndexPage
