import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

const DetailedPost = props => {
  const post = props.post;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image */}
        <Image
          style={styles.image}
          source={require('../../../assets/images/himal.jpg')}
        />

        {/* Bed and Bedroom */}
        <Text style={styles.bedrooms}>
          {post?.bed}bed {post?.bedroom}bedroom
        </Text>

        {/* Type and Description */}
        <Text style={styles.description} numberOfLines={2}>
          {post?.type}. {post?.title}
        </Text>

        {/* IOld price and new Price */}
        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post?.oldPrice} </Text>
          <Text style={styles.price}> ${post?.newPrice}/night</Text>
        </Text>

        {/* Total Price */}
        <Text style={styles.totalPrice}>${post?.totalPrice} Total</Text>
        <Text style={styles.description}>{post?.description}</Text>
        {/* <Text>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris in commodo ligula, ac lacinia massa. Nam
        hendrerit maximus dui cursus varius. Vivamus aliquet non tellus quis
        volutpat. Pellentesque cursus quam odio, eget lacinia massa accumsan at.
        Quisque dolor justo, convallis eu laoreet non, rutrum sit amet lacus.
        Donec luctus turpis non pretium efficitur. Quisque feugiat imperdiet
        neque, posuere ultrices elit dapibus in. In venenatis finibus risus, at
        dignissim quam venenatis nec. Aliquam commodo leo leo, posuere feugiat
        nibh blandit vel. Vestibulum ullamcorper ante vel nunc ornare aliquam.
        Vivamus lacinia tellus non venenatis pellentesque. Praesent luctus, ex
        eu luctus laoreet, libero tortor convallis tellus, vel varius nulla
        felis eu nibh. Aliquam commodo turpis viverra scelerisque ullamcorper.
      </Text> */}
      </View>
    </ScrollView>
  );
};

export default DetailedPost;
