import React from 'react'
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
} from '@material-ui/core'

export const SectionCard = ({ children, src, alt, title }) => (
  <Card>
    <CardActionArea>
      <CardHeader title={title} />
      {src && (
        <CardMedia>
          <img src={src} alt={alt} width='100%' />
        </CardMedia>
      )}
      <CardContent>{children}</CardContent>
    </CardActionArea>
  </Card>
)
