import React, {  useEffect } from 'react';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import animeService from '../../services/animeService';
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage';
import { AnimePage } from './AnimePage';
import { setAnimePage } from './HomePageSlice';

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispath = (dispath: Dispatch) => ({
    setAnimePage: ( page : GetAnimePage["Page"]) => dispath(setAnimePage(page))
})

export function HomePage(props : IHomePageProps) {

    const { setAnimePage } = actionDispath(useAppDispatch());

    const fetchAnimePage = async () => {
        const animePage = await animeService.getAnimePage( 0 , 100).catch((err) => {
            console.log("error" + err);
        });

        if(animePage){
            setAnimePage(animePage)
        }
    }

    useEffect(() => {
        fetchAnimePage()
    } , [])

    return (
        <Container>
        <h1>Ani Info Home Page</h1>
        <AnimePage />
        </Container>
    );
}