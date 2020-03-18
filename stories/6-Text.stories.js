import React from 'react';
import Text from '../components/Text';
import '../index.css';

export default {
  component: Text,
  title: 'Text',
  excludeStories: /.*Data$/
};

const content1Data = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ultrices neque,
            et tincidunt est commodo non. Sed tincidunt faucibus arcu, in hendrerit tortor sollicitudin ut.
            <br/>
            Morbi luctus pellentesque dolor, in viverra risus porttitor in. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Proin sed nisi ante. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            <br/>
            In ornare risus eu enim commodo, ut placerat ligula suscipit. Donec tempor sed magna et bibendum.
            Phasellus ac leo leo.
        </p>
    )
}

export const Default = () => <Text title={'Lorem ipsum'} content={content1Data()} citationJap={'猿も木から落ちる'} citationTrad={'Lorem ipsum dolor sit amet'}/>;