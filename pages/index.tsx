import type {GetServerSidePropsContext, NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
  background: url("cid_bg.png") no-repeat;
  background-size:cover;
  position: relative;
  width: 520px;
  height: 520px;
  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    font-size: 53px;
    font-weight: 400;
    color: #97F1FF;
    line-height: 68px;
    letter-spacing: 4px;
    text-shadow: 0 1px 1px rgba(0,0,0,0.5);
    margin-bottom: 60px;
    font-family: 'Silkscreen' , sans-serif;
  }
`

interface Props {
  cid: string
}

const Home: NextPage<Props> = ({cid}: Props) => {
  return (
    <Container id={"aptos-cid"}>
      <p className={'cid-text'}>{cid}.APTOS</p>
    </Container>
  )
}

export default Home

export const getServerSideProps = async ({query}: GetServerSidePropsContext) => {
  const {cid} = query
  return {
    props: {
      cid: cid || ''
    }
  }
}