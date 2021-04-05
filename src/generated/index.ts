import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  avg?: Maybe<CommentAvgAggregateOutputType>;
  count?: Maybe<CommentCountAggregateOutputType>;
  max?: Maybe<CommentMaxAggregateOutputType>;
  min?: Maybe<CommentMinAggregateOutputType>;
  sum?: Maybe<CommentSumAggregateOutputType>;
};

export type AggregateGroup = {
  __typename?: 'AggregateGroup';
  avg?: Maybe<GroupAvgAggregateOutputType>;
  count?: Maybe<GroupCountAggregateOutputType>;
  max?: Maybe<GroupMaxAggregateOutputType>;
  min?: Maybe<GroupMinAggregateOutputType>;
  sum?: Maybe<GroupSumAggregateOutputType>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  avg?: Maybe<PostAvgAggregateOutputType>;
  count?: Maybe<PostCountAggregateOutputType>;
  max?: Maybe<PostMaxAggregateOutputType>;
  min?: Maybe<PostMinAggregateOutputType>;
  sum?: Maybe<PostSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  avg?: Maybe<UserAvgAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  post: Post;
  postId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CommentAvgAggregateOutputType = {
  __typename?: 'CommentAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
  postId: Scalars['Float'];
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CommentCreateInput = {
  author?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyAuthorInputEnvelope = {
  data: CommentCreateManyAuthorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyInput = {
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyPostInput = {
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyPostInputEnvelope = {
  data: CommentCreateManyPostInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
  create: CommentUncheckedCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentUncheckedCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPostInput = {
  author?: Maybe<UserCreateNestedOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentOrderByInput = {
  authorId?: Maybe<SortOrder>;
  contain?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  AuthorId = 'authorId',
  Contain = 'contain',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt'
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereWithAggregatesInput>>>;
  authorId?: Maybe<IntNullableWithAggregatesFilter>;
  contain?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  postId?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CommentSumAggregateOutputType = {
  __typename?: 'CommentSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
};

export type CommentUncheckedCreateInput = {
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentUncheckedCreateNestedManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentUncheckedCreateWithoutAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateWithoutPostInput = {
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUncheckedUpdateInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type CommentUncheckedUpdateManyWithoutCommentsInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
};

export type CommentUncheckedUpdateWithoutAuthorInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  postId?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutPostInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutPostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  createMany?: Maybe<CommentCreateManyPostInputEnvelope>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUncheckedUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUncheckedUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutAuthorInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentUncheckedCreateWithoutAuthorInput;
  update: CommentUncheckedUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentUncheckedCreateWithoutPostInput;
  update: CommentUncheckedUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<Maybe<CommentWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CommentWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentWhereInput>>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type GroupUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type GroupAvgAggregateOutputType = {
  __typename?: 'GroupAvgAggregateOutputType';
  id: Scalars['Float'];
};

export type GroupCountAggregateOutputType = {
  __typename?: 'GroupCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type GroupCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateNestedManyWithoutGroupInput>;
};

export type GroupCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupCreateNestedOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutUsersInput>;
  create?: Maybe<GroupUncheckedCreateWithoutUsersInput>;
};

export type GroupCreateOrConnectWithoutUsersInput = {
  create: GroupUncheckedCreateWithoutUsersInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMaxAggregateOutputType = {
  __typename?: 'GroupMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMinAggregateOutputType = {
  __typename?: 'GroupMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GroupRelationFilter = {
  is?: Maybe<GroupWhereInput>;
  isNot?: Maybe<GroupWhereInput>;
};

export enum GroupScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GroupScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<GroupScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<GroupScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<GroupScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type GroupSumAggregateOutputType = {
  __typename?: 'GroupSumAggregateOutputType';
  id: Scalars['Int'];
};

export type GroupUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserUncheckedCreateNestedManyWithoutGroupInput>;
};

export type GroupUncheckedCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupUncheckedUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUncheckedUpdateManyWithoutGroupInput>;
};

export type GroupUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUncheckedUpdateWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutUsersInput>;
  create?: Maybe<GroupUncheckedCreateWithoutUsersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GroupUncheckedUpdateWithoutUsersInput>;
  upsert?: Maybe<GroupUpsertWithoutUsersInput>;
};

export type GroupUpdateWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpsertWithoutUsersInput = {
  create: GroupUncheckedCreateWithoutUsersInput;
  update: GroupUncheckedUpdateWithoutUsersInput;
};

export type GroupWhereInput = {
  AND?: Maybe<Array<Maybe<GroupWhereInput>>>;
  NOT?: Maybe<Array<Maybe<GroupWhereInput>>>;
  OR?: Maybe<Array<Maybe<GroupWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntNullableFilter>;
};

export type IntWithAggregatesFilter = {
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};


export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneComment: Comment;
  createOneGroup: Group;
  createOnePost: Post;
  createOneUser: User;
  deleteManyComment: BatchPayload;
  deleteManyGroup: BatchPayload;
  deleteManyPost: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneComment?: Maybe<Comment>;
  deleteOneGroup?: Maybe<Group>;
  deleteOnePost?: Maybe<Post>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<User>;
  updateField: Field;
  updateManyComment: BatchPayload;
  updateManyGroup: BatchPayload;
  updateManyPost: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneComment: Comment;
  updateOneGroup: Group;
  updateOnePost: Post;
  updateOneUser: User;
  updatePassword?: Maybe<Scalars['Boolean']>;
  upsertOneComment: Comment;
  upsertOneGroup: Group;
  upsertOnePost: Post;
  upsertOneUser: User;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeleteManyGroupArgs = {
  where?: Maybe<GroupWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyGroupArgs = {
  data: GroupUpdateManyMutationInput;
  where?: Maybe<GroupWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneGroupArgs = {
  create: GroupCreateInput;
  update: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  max?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  max?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  avg?: Maybe<NestedFloatNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntWithAggregatesFilter = {
  avg?: Maybe<NestedFloatFilter>;
  count?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  max?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedIntFilter>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sum?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type PostCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type PostAvgAggregateOutputType = {
  __typename?: 'PostAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
};

export type PostCountAggregateOutputType = {
  __typename?: 'PostCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  published?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PostCreateInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateManyAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: PostCreateManyAuthorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PostCreateManyInput = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<PostUncheckedCreateWithoutCommentsInput>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostUncheckedCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  create: PostUncheckedCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateWithoutCommentsInput = {
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostMaxAggregateOutputType = {
  __typename?: 'PostMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostMinAggregateOutputType = {
  __typename?: 'PostMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostOrderByInput = {
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<PostScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<PostScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<PostScalarWhereWithAggregatesInput>>>;
  authorId?: Maybe<IntNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type PostSumAggregateOutputType = {
  __typename?: 'PostSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type PostUncheckedCreateInput = {
  authorId?: Maybe<Scalars['Int']>;
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostUncheckedCreateWithoutAuthorInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUncheckedCreateWithoutCommentsInput = {
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUncheckedUpdateInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  comments?: Maybe<CommentUncheckedUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateManyInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PostUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<PostUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<PostUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type PostUncheckedUpdateManyWithoutPostsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateWithoutAuthorInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUncheckedUpdateWithoutCommentsInput = {
  authorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUncheckedUpdateManyWithoutPostsInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PostUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<PostUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<PostUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<PostUncheckedCreateWithoutCommentsInput>;
  update?: Maybe<PostUncheckedUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUncheckedUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostUncheckedCreateWithoutAuthorInput;
  update: PostUncheckedUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostUncheckedCreateWithoutCommentsInput;
  update: PostUncheckedUpdateWithoutCommentsInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<Maybe<PostWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PostWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostWhereInput>>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateComment?: Maybe<AggregateComment>;
  aggregateGroup?: Maybe<AggregateGroup>;
  aggregatePost?: Maybe<AggregatePost>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstComment?: Maybe<Comment>;
  findFirstGroup?: Maybe<Group>;
  findFirstPost?: Maybe<Post>;
  findFirstUser?: Maybe<User>;
  findManyComment: Array<Comment>;
  findManyCommentCount: Scalars['Int'];
  findManyGroup: Array<Group>;
  findManyGroupCount: Scalars['Int'];
  findManyPost: Array<Post>;
  findManyPostCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueComment?: Maybe<Comment>;
  findUniqueGroup?: Maybe<Group>;
  findUniquePost?: Maybe<Post>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryAggregateCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryAggregateGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindFirstGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyGroupCountArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyPostCountArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindUniqueGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryFindUniquePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntNullableFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  contains?: Maybe<Scalars['String']>;
  count?: Maybe<NestedIntFilter>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  max?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts: Array<Post>;
};


export type UserCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type UserPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  groupId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateNestedOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateManyGroupInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserCreateManyGroupInputEnvelope = {
  data: UserCreateManyGroupInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserCreateNestedManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  createMany?: Maybe<UserCreateManyGroupInputEnvelope>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGroupInput = {
  create: UserUncheckedCreateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserUncheckedCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateNestedOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutGroupInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateWithoutPostsInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateNestedOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  GroupId = 'groupId',
  Id = 'id',
  Name = 'name',
  Password = 'password'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  groupId?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UserUncheckedCreateInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedCreateNestedManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  createMany?: Maybe<UserCreateManyGroupInputEnvelope>;
};

export type UserUncheckedCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedCreateWithoutGroupInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedCreateWithoutPostsInput = {
  comments?: Maybe<CommentUncheckedCreateNestedManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  createMany?: Maybe<UserCreateManyGroupInputEnvelope>;
  delete?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<UserUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: Maybe<Array<Maybe<UserUpdateManyWithWhereWithoutGroupInput>>>;
  upsert?: Maybe<Array<Maybe<UserUpsertWithWhereUniqueWithoutGroupInput>>>;
};

export type UserUncheckedUpdateManyWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateWithoutGroupInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateWithoutPostsInput = {
  comments?: Maybe<CommentUncheckedUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  groupId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutGroupInput = {
  data: UserUncheckedUpdateManyWithoutUsersInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutGroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  createMany?: Maybe<UserCreateManyGroupInputEnvelope>;
  delete?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<UserUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: Maybe<Array<Maybe<UserUpdateManyWithWhereWithoutGroupInput>>>;
  upsert?: Maybe<Array<Maybe<UserUpsertWithWhereUniqueWithoutGroupInput>>>;
};

export type UserUpdateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<UserUncheckedCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithWhereUniqueWithoutGroupInput = {
  data: UserUncheckedUpdateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutGroupInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutPostsInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutGroupInput = {
  create: UserUncheckedCreateWithoutGroupInput;
  update: UserUncheckedUpdateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserUncheckedCreateWithoutCommentsInput;
  update: UserUncheckedUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserUncheckedCreateWithoutPostsInput;
  update: UserUncheckedUpdateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  group?: Maybe<GroupWhereInput>;
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);


export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($email: String!, $password: String!, $name: String) {
  signup(email: $email, password: $password, name: $name) {
    id
  }
}
    `;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;