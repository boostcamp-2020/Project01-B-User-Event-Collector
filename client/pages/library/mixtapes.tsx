import styled from 'styled-components';
import LibraryHeader from '@components/organisms/Library/LibraryHeader/LibraryHeader';
import LibraryCardList from '@components/organisms/Library/LibraryCardList/LibraryCardList';
import apiUrl from 'constants/apiUrl';
import { request } from '@utils/apis';
import ComponentInfoContext from '@utils/context/ComponentInfoContext';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { page, contentType } from '@constants/identifier';

const LibraryContainer = styled.div`
    width: 100%;
    min-height: 1300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: white;
    padding: 0 0 300px 225px;
`;

const LibraryHeaderContainer = styled.div`
    margin: 50px 0 30px 0;
`;

const LibraryContentsContainer = styled.div``;

const MixtapeLibrary = ({ mixtapeData }) => {
    return (
        <ComponentInfoContext.Provider value={{ componentId: page.libraryMixtape }}>
            <LibraryContainer>
                <LibraryHeaderContainer>
                    <LibraryHeader sort="mixtape" />
                </LibraryHeaderContainer>
                <LibraryContentsContainer>
                    <ComponentInfoWrapper componentId={contentType.mixtape}>
                        <LibraryCardList variant="mixtape" items={mixtapeData} />
                    </ComponentInfoWrapper>
                </LibraryContentsContainer>
            </LibraryContainer>
        </ComponentInfoContext.Provider>
    );
};

export const getServerSideProps = async () => {
    const mixtapeData = await request(apiUrl.libraryMixtape);
    return {
        props: {
            mixtapeData,
        },
    };
};
export default MixtapeLibrary;
