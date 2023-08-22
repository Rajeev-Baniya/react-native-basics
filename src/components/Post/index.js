import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Post = props => {
  const navigation = useNavigation();
  const post = props.post;
  const gotToPostPage = () => {
    navigation.navigate('Post', {
      postId: post.id,
    });
  };
  return (
    <Pressable style={styles.container} onPress={gotToPostPage}>
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
    </Pressable>
  );
};

export default Post;
