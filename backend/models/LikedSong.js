import mongoose from "mongoose";

const likedSongSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    songId: {
      type: String,
      required: true,
    },
    songData: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Ek user same song ko dobara like na kar sake
likedSongSchema.index({ user: 1, songId: 1 }, { unique: true });

const LikedSong = mongoose.model("LikedSong", likedSongSchema);

export default LikedSong;