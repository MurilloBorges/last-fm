interface Loading {
  signIn: boolean;
  register: boolean;
  artist: boolean;
  album: boolean;
}

export interface LoadingState {
  readonly data: Loading;
}
