import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const PostCarouselItem = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={require('../../../assets/images/himal.jpg')}
      />
      <View style={styles.innerContainer}>
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
      </View>
    </View>
  );
};

export default PostCarouselItem;
