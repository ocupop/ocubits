import { DecoratorFn } from '@storybook/react'
import React from 'react'

interface CenteredStoryProps {
  children: React.ReactNode;
  horizontal?: boolean;
  vertical?: boolean;
}
const CenteredStory = ({ horizontal, vertical, children }: CenteredStoryProps) => {
  return (
    <div
      style={{
        margin: '3rem',
        minHeight: '100%'
      }}
    >
      {children}
    </div>
  )
}

export const withNotCenteredStory: DecoratorFn = (story) => <CenteredStory>{story()}</CenteredStory>
export const withCenteredStory: DecoratorFn = (story) => (
  <CenteredStory horizontal vertical>
    {story()}
  </CenteredStory>
)
export const withHorizontallyCenteredStory: DecoratorFn = (story) => (
  <CenteredStory horizontal>{story()}</CenteredStory>
)
export const withVerticallyCenteredStory: DecoratorFn = (story) => <CenteredStory vertical>{story()}</CenteredStory>
