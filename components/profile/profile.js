import React from "react";
import { View, Text, Button, Image, AsyncStorage } from "react-native";
import ImagePicker from "react-native-image-picker";

class Profile extends React.Component {
  state = {
    image: null,
    message: "upload new photo",
    user: {},
  };
  componentDidMount = () => {
    this.getOldInfo();
  };
  handleChooseImage = () => {
    const options = {
      noData: true,
      title: "my pic app",
      takePhotoButtonTitle: "Take photo with your camera",
      chooseFromLibraryButtonTitle: "Choose photo from library",
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("Image Picker Error: ", response.error);
      }
      if (response.uri) {
        this.setState({ image: response, message: "change your photo" });
        this.savePhotoUri(response);
      }
    });
  };

  getOldInfo = async () => {
    try {
      let info = await AsyncStorage.getItem("login");
      let image = await AsyncStorage.getItem("userImage");
      if (info) {
        info = JSON.parse(info);
        this.setState({ user: info.user });
      }
      if (image) {
        image = JSON.parse(image);
        this.setState({ image: image, message: "change your photo" });
      }
    } catch (error) {
      log(error);
    }
  };

  savePhotoUri = async (image) => {
    try {
      AsyncStorage.setItem("userImage", JSON.stringify(image));
    } catch (error) {
      log(error);
    }
  };

  render() {
    const { image, message, user } = this.state;
    return (
      <View style={{ padding: 20, justifyContent: "center" }}>
        <Text>Welcome, {user.username}</Text>
        <Text>{user.email}</Text>
        {image && (
          <Image
            source={{ uri: image.uri }}
            style={{ width: 100, height: 100, margin: 10 }}
          />
        )}
        <Text>{message}</Text>
        <Button title="choose" onPress={this.handleChooseImage} />
      </View>
    );
  }
}
export default Profile;
