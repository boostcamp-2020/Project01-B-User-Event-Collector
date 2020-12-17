import styled from 'styled-components';
import Text from '@components/atoms/Text';
import { request } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
import {
    TabViewTransitionEventProps,
    TransitionEventProps,
    ClickEventProps,
    LikeEventProps,
    ActiveEventProps,
    AppearEventProps,
    DisappearEventProps,
    BackgroundEventProps,
    SearchEventProps,
    SubscribeEventProps,
    TerminateEventProps,
    PlayEventProps,
    AddToUpnextEventProps,
    MoveTrackEventProps,
    RemoveFromUpnextEventProps,
    SaveEventProps,
    PlayNowEventProps
} from '@interfaces/eventProps';

const Container = styled.div`
    width: 100%;
    min-height: 1500px;
    background-color: #f2f2f2;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0 200px 225px;
`;

const PageTitle = styled.div`
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 100px;
`;

const EventContainer = styled.div`
    width: 1200px;
`;

const TitleContainer = styled.div`
    font-weight: 700;
    padding: 10px 0;
    margin: 10px 0;
    font-size: 20px;
`;

const ContentsContainer = styled.div`
    width: 100%;
    background-color: white;
    height: 600px;
    margin: 0 0 50px 0;
    padding: 40px 30px;
    overflow: scroll;
    font-size: 13px;
`;

const EventRow = styled.div`
    display: flex;
    margin: 0 0 7px 0 ;
`;

const EventColumn = styled.div`
    display: flex;
    margin: 0px 5px;
`;

const ParamName = styled.div`
    display: flex;
    margin-right: 2px;
    color: rgba(150,150,150)
`;

const Param = styled.div`
    display: flex;
    margin-right: 3px;
`;

const EventName = styled.div`
    margin-right: 6px;
    font-weight: 700;
    width: 120px;
`;

const getEventColumn = (paramName, param) => {
    return (
    <EventColumn>
        <ParamName>{paramName+':'}</ParamName>
        <Param>{param? param:'null'}</Param>
    </EventColumn>
    )
}

const ClickEventRow = (e : ClickEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('page', e.page)}
        {getEventColumn('targetPage', e.targetPage)}
        {getEventColumn('componentID', e.componentId)}
        {getEventColumn('platform', e.platform)}
        {getEventColumn('timestamp', e.timestamp)}
    </EventRow>
)

const TransitionEventRow = (e : TransitionEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('Page', e.page)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const LikeEventRow = (e : LikeEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('isLike', e.isLike.toString())}
        {getEventColumn('dataType', e.data.type)}
        {getEventColumn('dataID', e.data.id)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const AppearEventRow = (e : AppearEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('page', e.page)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const DisappearEventRow = (e : DisappearEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('page', e.page)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const TabViewTransitionEventRow = (e : TabViewTransitionEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('page', e.page)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const BackgroundEventRow = (e : BackgroundEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const ActiveEventRow = (e : ActiveEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const SearchEventRow=  (e : SearchEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('Text', e.text)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const SubscribeEventRow = (e : SubscribeEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const TerminateEventRow = (e : TerminateEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const getProperEventRow = (e) => {
    switch(e.event) {
        case "Click":
            return ClickEventRow(e);
        case "Transition":
            return TransitionEventRow(e);
        case "Like":
            return LikeEventRow(e);
        case "Appear":
            return AppearEventRow(e);
        case "DisAppear":
            return DisappearEventRow(e);
        case "TabViewTransition":
            return TabViewTransitionEventRow(e);
        case "Background":
            return BackgroundEventRow(e);
        case "Active":
            return ActiveEventRow(e);
        case "Search":
            return SearchEventRow(e);
        case "Subscribe":
            return SubscribeEventRow(e);
        case "Terminate":
            return TerminateEventRow(e);
        default:
            console.log('normalEvent: ' + e.event);
            console.log(e);
            return;
    }
}

const PlayEventRow = (e : PlayEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('isPlay', e.isPlay.toString())}
        {getEventColumn('trackId', e.trackId.toString())}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const AddToUpnextEventRow = (e : AddToUpnextEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('trackId', e.trackId.toString())}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const MoveTrackEventRow = (e : MoveTrackEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('trackId', e.trackId)}
        {getEventColumn('source', e.source)}
        {getEventColumn('destination', e.destination)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const RemoveFromUpnextEventRow = (e : RemoveFromUpnextEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('UserID', e.userId)}
        {getEventColumn('trackId', e.trackId)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const SaveEventRow = (e : SaveEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('dataType', e.data.type)}
        {getEventColumn('dataID', e.data.id)}
        {getEventColumn('ComponentID', e.componentId)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const PlayNowEventRow = (e : PlayNowEventProps) => (
    <EventRow>
        <EventName>{e.event}</EventName>
        {getEventColumn('userID', e.userId)}
        {getEventColumn('trackId', e.trackId)}
        {getEventColumn('targetTrackId', e.targetTrackId)}
        {getEventColumn('playingProgress', e.playingProgress)}
        {getEventColumn('Platform', e.platform)}
        {getEventColumn('Timestamp', e.timestamp)}
    </EventRow>
)

const getProperPlayEventRow = (e) => {
    switch(e.event) {
        case "Play":
            return PlayEventRow(e);
        case "PlayNow":
            return PlayNowEventRow(e);
        case "AddToUpnext":
            return AddToUpnextEventRow(e);
        case "MoveTrack":
            return MoveTrackEventRow(e);
        case "RemoveFromUpnext":
            return RemoveFromUpnextEventRow(e);
        case "Save":
            return SaveEventRow(e);
        default:
            console.log('playEvent: ' + e.event);
            console.log(e);
            return;
    }
}

const Admin = ({ normalEventData, playEventData }) => {
    return (
        <Container>
            <PageTitle>Admin Page</PageTitle>
            <EventContainer>
                <TitleContainer>Normal Events</TitleContainer>
                <ContentsContainer>
                    {normalEventData.map((e) => 
                        getProperEventRow(e)
                    )}
                </ContentsContainer>
            </EventContainer>
            <EventContainer>
                <TitleContainer>Play Events</TitleContainer>
                <ContentsContainer>
                    {playEventData.map((e) => 
                            getProperPlayEventRow(e)
                        )}
                </ContentsContainer>
            </EventContainer>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const [normalEventData, playEventData] = await Promise.all([
        request(apiUrl.event),
        request(apiUrl.playEvent)
    ]);

    if (!normalEventData|| !playEventData) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            normalEventData, 
            playEventData
        },
    };
}

export default Admin;
