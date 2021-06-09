import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GetProfileImagesQuery } from "../../../gatsby-graphql"
import * as styles from "./styles.module.scss"

interface ProfileImageProps {
  className?: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({ className = "" }) => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery<GetProfileImagesQuery>(graphql`
    query getProfileImages {
      allImageSharp(
        filter: {
          id: {
            regex: "/74a0d194-7f94-52f9-85e1-4ff94f5b4fce|a19d39e4-b4dc-5e8b-af33-523c0da429dd/"
          }
        }
      ) {
        nodes {
          fluid(maxHeight: 1000, maxWidth: 1000) {
            srcSet
            srcSetWebp
          }
          gatsbyImageData
        }
      }
    }
  `)

  const [darkImg, lightImg] = nodes

  return (
    <div>
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcSet={darkImg.fluid?.srcSetWebp || ""}
          type="image/webp"
        />
        <source
          media="(prefers-color-scheme: dark)"
          srcSet={darkImg.fluid?.srcSet || ""}
          type="image/jpg"
        />
        <source srcSet={lightImg.fluid?.srcSetWebp || ""} type="image/webp" />
        <img
          className={`${styles.profileImage} ${className}`}
          srcSet={lightImg.fluid?.srcSet || ""}
          alt="ProfileImage"
        />
      </picture>
    </div>
  )
}

export default ProfileImage
