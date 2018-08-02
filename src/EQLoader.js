import React from 'react'
import ReactLoading from 'react-loading'
import { Section, Title, Article, Prop, list } from "./genericStyle";

const EQLoader = () => (
	<Section>
		<Title>Loading</Title>
		<ReactLoading type='spoke' color='#ddd' />
	</Section>
)

export default EQLoader