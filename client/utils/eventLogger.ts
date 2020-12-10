function eventLogger(event, param) {
    const eventData = {
        event,
        ...param,
        timestamp: new Date(),
    };
    // TODO : event api 요청으로 수정
    console.log(eventData);
}

export default eventLogger;
