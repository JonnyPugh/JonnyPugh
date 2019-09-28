import React from 'react'
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core'

export const ImageCard = ({ children, src, alt, title }) => (
  <Card>
    <CardActionArea>
      <CardHeader title={title} />
      <CardMedia>
        <img src={src} alt={alt} width='100%'></img>
      </CardMedia>
      <CardContent>{children}</CardContent>
    </CardActionArea>
  </Card>
)
