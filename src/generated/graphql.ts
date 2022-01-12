import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Arbitrary object */
  Any: any;
  /** Date custom scalar type */
  Date: any;
  /** A custom type, that represents a string, that contains JSON-structured data */
  JsonString: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** TimePoint custom scalar type. examples: 5:45, 12:04, 2:04:09 */
  TimePoint: any;
};



export type AdditionalAssessmentQuestion = {
  __typename?: 'AdditionalAssessmentQuestion';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type AdditionalAssessmentQuestionInput = {
  title: TranslationsInput;
};

export type AdditionalReading = {
  __typename?: 'AdditionalReading';
  icon: Scalars['String'];
  id: Scalars['ID'];
  link: Scalars['String'];
  title: Scalars['String'];
};

export type AnalyticsReport = {
  __typename?: 'AnalyticsReport';
  activeLearnersInPeriod: Array<User>;
  newComerLearnerStats: NewComerLearnerStats;
  programActivity?: Maybe<ProgramActivity>;
  programModuleActivity?: Maybe<ProgramModuleActivity>;
  programWeekActivity?: Maybe<ProgramWeekActivity>;
  programsActivity?: Maybe<Array<ProgramActivity>>;
};

export type AnalyticsReportInput = {
  activeLearnersSince?: Maybe<Scalars['Int']>;
  moduleId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
  registerFrom?: Maybe<Scalars['Date']>;
  registerTo?: Maybe<Scalars['Date']>;
  weekId?: Maybe<Scalars['ID']>;
};


export type ArticleLesson = {
  __typename?: 'ArticleLesson';
  id: Scalars['ID'];
  story: Scalars['String'];
};

export type ArticleLessonInput = {
  story: TranslationsInput;
};

export type Assessment = {
  __typename?: 'Assessment';
  additionalQuestions?: Maybe<Array<AdditionalAssessmentQuestion>>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  sections?: Maybe<Array<AssessmentSection>>;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type AssessmentAdditionalAnswerSubmissionInput = {
  additionalQuestion: Scalars['ID'];
  answerText: Scalars['String'];
};

export type AssessmentAspect = {
  __typename?: 'AssessmentAspect';
  id: Scalars['ID'];
  quotient: AssessmentQuotient;
  title: Scalars['String'];
};

export type AssessmentAspectInput = {
  quotient: Scalars['ID'];
  title: TranslationsInput;
};

export type AssessmentAspectSubmission = {
  __typename?: 'AssessmentAspectSubmission';
  aspect: AssessmentAspect;
  id: Scalars['ID'];
  pickedWeight: Scalars['Long'];
  quotient: AssessmentQuotient;
};

export type AssessmentAspectSubmissionInput = {
  aspect: Scalars['ID'];
  pickedWeight: Scalars['Long'];
  quotient: Scalars['ID'];
};

export type AssessmentQuotient = {
  __typename?: 'AssessmentQuotient';
  description: Scalars['String'];
  id: Scalars['ID'];
  key: Scalars['String'];
  title: Scalars['String'];
};

export type AssessmentQuotientChoiceConclusion = {
  __typename?: 'AssessmentQuotientChoiceConclusion';
  conclusion: Scalars['String'];
  id: Scalars['ID'];
  quotients: Array<AssessmentQuotient>;
};


export type AssessmentQuotientChoiceConclusionQuotientsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type AssessmentQuotientChoiceConclusionInput = {
  conclusion: TranslationsInput;
  quotients: Array<Scalars['ID']>;
};

export type AssessmentQuotientInput = {
  description: TranslationsInput;
  key: Scalars['String'];
  title: TranslationsInput;
};

export type AssessmentSection = {
  __typename?: 'AssessmentSection';
  aspects: Array<AssessmentAspect>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  scaleCaption: ScaleCaption;
  subject: Scalars['String'];
  title: Scalars['String'];
};

export type AssessmentSectionInput = {
  aspects: Array<AssessmentAspectInput>;
  description?: Maybe<TranslationsInput>;
  scaleCaption: Scalars['ID'];
  subject: TranslationsInput;
  title: TranslationsInput;
};

export type AssessmentSectionSubmission = {
  __typename?: 'AssessmentSectionSubmission';
  aspects: Array<AssessmentAspectSubmission>;
  id: Scalars['ID'];
  section: AssessmentSection;
};

export type AssessmentSectionSubmissionInput = {
  aspects: Array<AssessmentAspectSubmissionInput>;
  section: Scalars['ID'];
};

export type AssessmentSubmission = {
  __typename?: 'AssessmentSubmission';
  additionalAnswers?: Maybe<Array<SubmittedAssessmentAdditionalAnswer>>;
  assessment: Assessment;
  conclusion?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  program: Program;
  quotientsSequences: Array<AssessmentQuotient>;
  sections: Array<AssessmentSectionSubmission>;
  submittedBy: User;
  updatedAt: Scalars['Date'];
};


export type AssessmentSubmissionQuotientsSequencesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type AssessmentSubmissionInput = {
  additionalAnswers?: Maybe<Array<AssessmentAdditionalAnswerSubmissionInput>>;
  assessment: Scalars['ID'];
  sections: Array<AssessmentSectionSubmissionInput>;
};

export type AssignmentPeerReview = {
  __typename?: 'AssignmentPeerReview';
  assessment?: Maybe<AssessmentSubmission>;
  assignmentSubmission: AssignmentSubmission;
  createdAt: Scalars['Date'];
  feedbackText: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['Date'];
  user: User;
};

export type AssignmentPeerReviewInput = {
  assessment?: Maybe<AssessmentSubmissionInput>;
  assignmentSubmission: Scalars['ID'];
  feedbackText: Scalars['String'];
};

export type AssignmentSectionSubmission = {
  __typename?: 'AssignmentSectionSubmission';
  file?: Maybe<AttachmentRecord>;
  id: Scalars['ID'];
  section: ModuleAssignmentSection;
  text?: Maybe<Scalars['String']>;
};

export type AssignmentSectionSubmissionInput = {
  section: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type AssignmentSubmission = {
  __typename?: 'AssignmentSubmission';
  assignment: ModuleAssignment;
  createdAt: Scalars['Date'];
  hasMyPeerReview: Scalars['Boolean'];
  id: Scalars['ID'];
  isDraft: Scalars['Boolean'];
  myPeerReview?: Maybe<AssignmentPeerReview>;
  peerReviews: Array<AssignmentPeerReview>;
  program: Program;
  sections: Array<AssignmentSectionSubmission>;
  submittedBy: User;
  totalPeerReviews: Scalars['Int'];
  tutorReview?: Maybe<AssignmentSubmissionReview>;
  updatedAt: Scalars['Date'];
};


export type AssignmentSubmissionPeerReviewsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type AssignmentSubmissionCandidate = {
  __typename?: 'AssignmentSubmissionCandidate';
  group: Group;
  hasSubmitted: Scalars['Boolean'];
  isSubmissionReviewed: Scalars['Boolean'];
  user: User;
};

export type AssignmentSubmissionInput = {
  assignment: Scalars['ID'];
  sections: Array<AssignmentSectionSubmissionInput>;
};

export type AssignmentSubmissionReview = {
  __typename?: 'AssignmentSubmissionReview';
  assignmentSubmission: AssignmentSubmission;
  createdAt: Scalars['Date'];
  feedbackText: Scalars['String'];
  id: Scalars['ID'];
  reviewedBy: User;
  updatedAt: Scalars['Date'];
};

export type AssignmentSubmissionReviewInput = {
  assignmentSubmission: Scalars['ID'];
  feedbackText: Scalars['String'];
};

export type AttachmentRecord = {
  __typename?: 'AttachmentRecord';
  attachmentTarget: AttachmentTarget;
  extension: Scalars['String'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  sizeB: Scalars['Int'];
  targetRef: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
};

/** Attachment Target */
export enum AttachmentTarget {
  AssignmentSectionSubmission = 'AssignmentSectionSubmission',
  DiscussionMessage = 'DiscussionMessage',
  GroupProjectSubmission = 'GroupProjectSubmission',
  ModuleAssignment = 'ModuleAssignment',
  Program = 'Program'
}

export type BroadcastResult = {
  __typename?: 'BroadcastResult';
  imprint: Scalars['String'];
  totalGroupsBroadcast: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type CategoryInput = {
  description: TranslationsInput;
  title: TranslationsInput;
};

export type ChatChannel = {
  __typename?: 'ChatChannel';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  lastMessagePostedAt: Scalars['Date'];
  members: Array<ChatMember>;
  totalUnreadMessages: Scalars['Int'];
  updatedAt: Scalars['Date'];
};

export type ChatContact = {
  __typename?: 'ChatContact';
  channelClue: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isConfirmed: Scalars['Boolean'];
  isOnline: Scalars['Boolean'];
  isTest: Scalars['Boolean'];
  language: SupportedLanguage;
  lastActivityAt: Scalars['Date'];
  notificationSettings: NotificationSettings;
  profile: Profile;
  quizLearnerMetrics: Array<QuizLearnerMetrics>;
  role: RegisterUserRole;
  source: UserSource;
  submittedModuleAssignments: Array<AssignmentSubmission>;
  submittedQuizAttempts: Array<QuizAttempt>;
  totalRewardsSize: Scalars['Int'];
  totalTutoredGroups: Scalars['Int'];
  updatedAt: Scalars['Date'];
  usedTours: Array<PlatformTour>;
};


export type ChatContactQuizLearnerMetricsArgs = {
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
};


export type ChatContactSubmittedModuleAssignmentsArgs = {
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
};


export type ChatContactSubmittedQuizAttemptsArgs = {
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
};


export type ChatContactTotalTutoredGroupsArgs = {
  programId: Scalars['ID'];
};

export type ChatMember = {
  __typename?: 'ChatMember';
  readMessagesBefore: Scalars['Date'];
  user: User;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  channel: ChatChannel;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isPinned: Scalars['Boolean'];
  message: Scalars['String'];
  postedBy: User;
  updatedAt: Scalars['Date'];
};

export type ClassroomResources = {
  __typename?: 'ClassroomResources';
  videoLessons?: Maybe<Array<VideoLesson>>;
};

export type ClientFilterInput = {
  filter?: Maybe<Scalars['Any']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OrderByInput>;
  search?: Maybe<Scalars['String']>;
};

export type CloneProgramContentExtraInput = {
  preserveWeeks: Scalars['Boolean'];
};

export type CommitmentLesson = {
  __typename?: 'CommitmentLesson';
  description: Scalars['String'];
  id: Scalars['ID'];
  items: Array<Scalars['String']>;
  itemsTitle: Scalars['String'];
};

export type CommitmentLessonInput = {
  description: TranslationsInput;
  items: Array<TranslationsInput>;
  itemsTitle: TranslationsInput;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  id: Scalars['ID'];
  latlong: Array<Scalars['Float']>;
  name: Scalars['String'];
};

export type CountryInput = {
  code: Scalars['String'];
  latlong: Array<Scalars['Float']>;
  name: TranslationsInput;
};

export type CreateAssessmentInput = {
  additionalQuestions?: Maybe<Array<AdditionalAssessmentQuestionInput>>;
  description?: Maybe<TranslationsInput>;
  sections?: Maybe<Array<AssessmentSectionInput>>;
  title: TranslationsInput;
};

export type CreateModuleAssignmentInput = {
  description?: Maybe<TranslationsInput>;
  dueDate?: Maybe<Scalars['Date']>;
  sections?: Maybe<Array<ModuleAssignmentSectionInput>>;
  title: TranslationsInput;
};

export type CreateProfileInput = {
  email: Scalars['String'];
  employeeId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<Gender>;
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  whatsAppNumber?: Maybe<Scalars['String']>;
};

export type CreateUserInput = {
  profile: CreateProfileInput;
};

export type CredentialsInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type DateRangeInput = {
  from: Scalars['Date'];
  to?: Maybe<Scalars['Date']>;
};

export type Discussion = {
  __typename?: 'Discussion';
  bounds?: Maybe<DiscussionBounds>;
  countMessages: Scalars['Int'];
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  host: DiscussionHostUnion;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  messages: Array<DiscussionMessage>;
  title?: Maybe<Scalars['String']>;
  type: DiscussionType;
  updatedAt: Scalars['Date'];
};


export type DiscussionCountMessagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type DiscussionMessagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type DiscussionBounds = {
  __typename?: 'DiscussionBounds';
  week?: Maybe<ProgramWeek>;
};

export type DiscussionForGroupsInput = {
  alsoInGroups?: Maybe<Array<Scalars['ID']>>;
  bindToWeek?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  inGroup: Scalars['ID'];
  title: Scalars['String'];
};

export type DiscussionHostUnion = Group | Section;

export type DiscussionMessage = {
  __typename?: 'DiscussionMessage';
  attachments: Array<AttachmentRecord>;
  createdAt: Scalars['Date'];
  discussion?: Maybe<Discussion>;
  id: Scalars['ID'];
  isBroadcast: Scalars['Boolean'];
  isPinned: Scalars['Boolean'];
  myVote?: Maybe<MessageVote>;
  nestingLevel: Scalars['Int'];
  offspring: Array<DiscussionMessage>;
  origin?: Maybe<DiscussionMessage>;
  parent?: Maybe<DiscussionMessage>;
  replies: Array<DiscussionMessage>;
  root?: Maybe<DiscussionMessage>;
  text: Scalars['String'];
  textUpdatedAt?: Maybe<Scalars['Date']>;
  totalNegativeVotes: Scalars['Int'];
  totalNext?: Maybe<Scalars['Int']>;
  totalOffspring: Scalars['Int'];
  totalPositiveVotes: Scalars['Int'];
  totalPrev?: Maybe<Scalars['Int']>;
  totalReplies: Scalars['Int'];
  updatedAt: Scalars['Date'];
  user: User;
  votes?: Maybe<Array<MessageVote>>;
  votesBalance: Scalars['Int'];
};


export type DiscussionMessageOffspringArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type DiscussionMessageRepliesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type DiscussionMessageTotalNextArgs = {
  orderDirection?: Maybe<OrderByDirection>;
};


export type DiscussionMessageTotalPrevArgs = {
  orderDirection?: Maybe<OrderByDirection>;
};

export type DiscussionMessageFilterByInput = {
  approach: FetchMessagesApproach;
  messageId: Scalars['ID'];
};

export type DiscussionMessageInput = {
  isPinned?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

/** Type of Discussion */
export enum DiscussionType {
  GroupBroadcasts = 'GroupBroadcasts',
  GroupIntroductions = 'GroupIntroductions',
  GroupTopicDiscussion = 'GroupTopicDiscussion',
  LessonContentDiscussion = 'LessonContentDiscussion',
  LessonSubjectDiscussion = 'LessonSubjectDiscussion'
}

export type EarnedReward = {
  __typename?: 'EarnedReward';
  effortName: EffortName;
  message: Scalars['String'];
  rewardSize: Scalars['Int'];
  subject: Scalars['String'];
};

export type EducationEntry = {
  __typename?: 'EducationEntry';
  createdAt: Scalars['Date'];
  currentlyStudyHere?: Maybe<Scalars['Boolean']>;
  finishedAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  institution: Scalars['String'];
  major: Scalars['String'];
  qualification: EducationQualification;
  startedAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type EducationEntryInput = {
  currentlyStudyHere?: Maybe<Scalars['Boolean']>;
  finishedAt?: Maybe<Scalars['String']>;
  institution: Scalars['String'];
  major: Scalars['String'];
  qualification: EducationQualification;
  startedAt: Scalars['String'];
};

/** Education Qualification */
export enum EducationQualification {
  BachelorsDegree = 'BachelorsDegree',
  HighSchool = 'HighSchool',
  MastersDegree = 'MastersDegree',
  PhD = 'PhD',
  PrimarySchool = 'PrimarySchool',
  SpecialistsDegree = 'SpecialistsDegree'
}

export enum EffortCategory {
  Classroom = 'Classroom',
  Group = 'Group'
}

/** Effort rewards for actions */
export enum EffortName {
  AddMessageToLessonContentDiscussion = 'AddMessageToLessonContentDiscussion',
  CommentInClassroomDiscussion = 'CommentInClassroomDiscussion',
  CommentInGroupDiscussion = 'CommentInGroupDiscussion',
  IntroduceYourself = 'IntroduceYourself',
  PeerReview3Assignments = 'PeerReview3Assignments',
  PeerReview4Assignments = 'PeerReview4Assignments',
  PeerReviewAssignment = 'PeerReviewAssignment',
  PledgeLearningCommitment = 'PledgeLearningCommitment',
  ReplyCommentInClassroomDiscussion = 'ReplyCommentInClassroomDiscussion',
  ReplyCommentInGroupDiscussion = 'ReplyCommentInGroupDiscussion',
  SubmitClassroomAssignment = 'SubmitClassroomAssignment'
}

export type EffortPath = {
  __typename?: 'EffortPath';
  id: Scalars['ID'];
  module?: Maybe<Module>;
  program?: Maybe<Program>;
  section?: Maybe<Section>;
  week?: Maybe<ProgramWeek>;
};

export type EffortReward = {
  __typename?: 'EffortReward';
  canBeEarnedTimes?: Maybe<Scalars['Int']>;
  effortCategory: EffortCategory;
  effortName: EffortName;
  effortPath: EffortPath;
  id: Scalars['ID'];
  rewardSize: Scalars['Int'];
  rewardType: RewardType;
};

export type EmailSubstitutionInput = {
  substitutionEmail: Scalars['String'];
};

export type EmploymentEntry = {
  __typename?: 'EmploymentEntry';
  createdAt: Scalars['Date'];
  currentlyWorkHere: Scalars['Boolean'];
  employmentType?: Maybe<EmploymentType>;
  finishedAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  industry?: Maybe<Scalars['String']>;
  ministry?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  startedAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type EmploymentEntryInput = {
  currentlyWorkHere: Scalars['Boolean'];
  employmentType?: Maybe<EmploymentType>;
  finishedAt?: Maybe<Scalars['Date']>;
  industry?: Maybe<Scalars['String']>;
  ministry?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  startedAt: Scalars['Date'];
};

/** Type of employment */
export enum EmploymentType {
  Contract = 'Contract',
  FullTime = 'FullTime',
  Internship = 'Internship',
  PartTime = 'PartTime',
  SelfEmployed = 'SelfEmployed'
}

export type FindUsersResult = {
  __typename?: 'FindUsersResult';
  found: Array<User>;
  foundIds: Array<Scalars['ID']>;
  notFoundByEmails: Array<Scalars['String']>;
  totalFound: Scalars['Int'];
  totalNotFound: Scalars['Int'];
};

export type FinishResetPasswordInput = {
  acknowledgementToken: Scalars['String'];
  newPassword: Scalars['String'];
};

export type GalleryFolder = {
  __typename?: 'GalleryFolder';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type GalleryFolderInput = {
  title: TranslationsInput;
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  createdAt: Scalars['Date'];
  filename: Scalars['String'];
  folder: GalleryFolder;
  id: Scalars['ID'];
  sizes: GalleryImageSizes;
  updatedAt: Scalars['Date'];
};

export type GalleryImageSizes = {
  __typename?: 'GalleryImageSizes';
  lg?: Maybe<Scalars['ID']>;
  md?: Maybe<Scalars['ID']>;
  sm?: Maybe<Scalars['ID']>;
  tn?: Maybe<Scalars['ID']>;
};

/** Gender of user */
export enum Gender {
  Female = 'Female',
  Male = 'Male'
}

export type Group = {
  __typename?: 'Group';
  assignmentGroupMetrics: Array<ModuleAssignnmentGroupMetrics>;
  averageQuizFailRate: Scalars['Float'];
  averageQuizPassRate: Scalars['Float'];
  averageQuizScore: Scalars['Float'];
  createdAt: Scalars['Date'];
  discussions?: Maybe<Array<Discussion>>;
  groupMetrics?: Maybe<ProgramMaterialMetrics>;
  id: Scalars['ID'];
  index: Scalars['Int'];
  learners: Array<User>;
  name?: Maybe<Scalars['String']>;
  program: Program;
  projects: Array<GroupProject>;
  quizGroupMetrics: Array<QuizGroupMetrics>;
  totalLearners: Scalars['Int'];
  tutor?: Maybe<User>;
  updatedAt: Scalars['Date'];
};


export type GroupAssignmentGroupMetricsArgs = {
  weekId?: Maybe<Scalars['ID']>;
};


export type GroupAverageQuizFailRateArgs = {
  quizId?: Maybe<Scalars['ID']>;
};


export type GroupAverageQuizPassRateArgs = {
  quizId?: Maybe<Scalars['ID']>;
};


export type GroupAverageQuizScoreArgs = {
  quizId?: Maybe<Scalars['ID']>;
};


export type GroupQuizGroupMetricsArgs = {
  weekId?: Maybe<Scalars['ID']>;
};

export type GroupProject = {
  __typename?: 'GroupProject';
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  hasOurSubmission: Scalars['Boolean'];
  id: Scalars['ID'];
  program: Program;
  submission?: Maybe<GroupProjectSubmission>;
  title: Scalars['String'];
};

export type GroupProjectInput = {
  description?: Maybe<TranslationsInput>;
  dueDate: Scalars['Date'];
  program: Scalars['ID'];
  title: TranslationsInput;
};

export type GroupProjectReview = {
  __typename?: 'GroupProjectReview';
  feedbackText: Scalars['String'];
  groupProjectSubmission: GroupProjectSubmission;
  id: Scalars['ID'];
  reviewedBy: User;
};

export type GroupProjectReviewInput = {
  feedbackText: Scalars['String'];
  groupProjectSubmission: Scalars['ID'];
};

export type GroupProjectSubmission = {
  __typename?: 'GroupProjectSubmission';
  attachment?: Maybe<AttachmentRecord>;
  createdAt: Scalars['Date'];
  group: Group;
  id: Scalars['ID'];
  message: Scalars['String'];
  project: GroupProject;
  reviews: Array<GroupProjectReview>;
  submittedBy: User;
  updatedAt: Scalars['Date'];
};

export type GroupProjectSubmissionInput = {
  group: Scalars['ID'];
  message: Scalars['String'];
  project: Scalars['ID'];
};

export enum GroupingMechanismType {
  LevelBased = 'LevelBased'
}

export type GroupingSetup = {
  __typename?: 'GroupingSetup';
  awaitingLearners?: Maybe<Array<User>>;
  mechanism: GroupingMechanismType;
  program: Program;
  totalTutors: Scalars['Int'];
  tutors?: Maybe<Array<User>>;
};

export type GroupingSetupInput = {
  mechanism: GroupingMechanismType;
  tutors?: Maybe<Array<Scalars['ID']>>;
};

export type HelpRequestInput = {
  message: Scalars['String'];
  subject: Scalars['String'];
};

export type ImageSizes = {
  __typename?: 'ImageSizes';
  lg?: Maybe<Scalars['ID']>;
  md?: Maybe<Scalars['ID']>;
  sm?: Maybe<Scalars['ID']>;
};

export type InVideoQuiz = {
  __typename?: 'InVideoQuiz';
  attachToTimepoint: Scalars['TimePoint'];
  createdAt: Scalars['Date'];
  failureText: Scalars['String'];
  id: Scalars['ID'];
  passPercent: Scalars['Int'];
  questions: Array<QuizQuestion>;
  quizType: QuizType;
  rewindToTimepoint: Scalars['TimePoint'];
  successText: Scalars['String'];
  tooltipText: Scalars['String'];
  updatedAt: Scalars['Date'];
  videoLesson: Scalars['ID'];
};

export type InVideoQuizInput = {
  attachToTimepoint: Scalars['TimePoint'];
  failureText: TranslationsInput;
  passPercent?: Maybe<Scalars['Int']>;
  questions: Array<QuizQuestionInput>;
  quizType?: Maybe<QuizType>;
  rewindToTimepoint: Scalars['TimePoint'];
  successText: TranslationsInput;
  tooltipText: TranslationsInput;
  videoLesson: Scalars['ID'];
};

export type InvitationProfile = {
  __typename?: 'InvitationProfile';
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type Language = {
  __typename?: 'Language';
  code: SupportedLanguage;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LanguageInput = {
  code: SupportedLanguage;
  name: TranslationsInput;
};


export type MessageVote = {
  __typename?: 'MessageVote';
  isPositive: Scalars['Boolean'];
  user: User;
};

export type Ministry = {
  __typename?: 'Ministry';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MinistryInput = {
  name: TranslationsInput;
};

export type Module = {
  __typename?: 'Module';
  availableRewardsSize: Scalars['Int'];
  description: Scalars['String'];
  duration: Scalars['Long'];
  earnedRewardsSize?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  materialIndex: ProgramMaterialIndex;
  name: Scalars['String'];
  order: Scalars['Long'];
  requiresFeedback: Scalars['Boolean'];
  sections: Array<Section>;
  totalArticleLessons: Scalars['Int'];
  totalAssessments: Scalars['Int'];
  totalAssignmentSubmissionsWithoutMyReview?: Maybe<Scalars['Int']>;
  totalAssignments: Scalars['Int'];
  totalQuizzes: Scalars['Int'];
  totalSubjectDiscussions: Scalars['Int'];
  totalVideoLessons: Scalars['Int'];
};


export type ModuleAvailableRewardsSizeArgs = {
  programId: Scalars['ID'];
};


export type ModuleEarnedRewardsSizeArgs = {
  programId: Scalars['ID'];
};

export type ModuleAssignment = {
  __typename?: 'ModuleAssignment';
  attachedFiles: Array<AttachmentRecord>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  mySubmission?: Maybe<AssignmentSubmission>;
  peerReviewAssessment?: Maybe<Assessment>;
  sections: Array<ModuleAssignmentSection>;
  submissionCandidates: Array<AssignmentSubmissionCandidate>;
  title: Scalars['String'];
  totalOfMyPeerReviews: Scalars['Int'];
  totalSubmissions: Scalars['Int'];
  totalSubmissionsInGroup?: Maybe<Scalars['Int']>;
  totals: ModuleAssignmentStats;
};


export type ModuleAssignmentTotalSubmissionsArgs = {
  programId?: Maybe<Scalars['ID']>;
};

export type ModuleAssignmentInput = {
  description?: Maybe<TranslationsInput>;
  dueDate?: Maybe<Scalars['Date']>;
  title: TranslationsInput;
};

export type ModuleAssignmentSection = {
  __typename?: 'ModuleAssignmentSection';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ModuleAssignmentSectionInput = {
  title: TranslationsInput;
};

export type ModuleAssignmentStats = {
  __typename?: 'ModuleAssignmentStats';
  awaitingForMyReview: Scalars['Int'];
  expectedNumberOfSubmissions: Scalars['Int'];
  notReviewedByMe: Scalars['Int'];
  reviewedByMe: Scalars['Int'];
};

export type ModuleAssignnmentGroupMetrics = {
  __typename?: 'ModuleAssignnmentGroupMetrics';
  assignmentId: Scalars['ID'];
  totalSubmissionsInGroup: Scalars['Int'];
  totalSubmissionsNotReviewedInGroup: Scalars['Int'];
  totalSubmissionsReviewedInGroup: Scalars['Int'];
};

export type ModuleDiscussionInput = {
  title: TranslationsInput;
};

export type ModuleInput = {
  description: TranslationsInput;
  name: TranslationsInput;
  requiresFeedback?: Maybe<Scalars['Boolean']>;
};

export type ModuleSectionContentUnion = ArticleLesson | Assessment | CommitmentLesson | Discussion | ModuleAssignment | Quiz | QuizAssessment | VideoLesson;

export type ModuleSectionMetrics = {
  __typename?: 'ModuleSectionMetrics';
  averageCohortProgress: Scalars['Float'];
  isVisited: Scalars['Boolean'];
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  progress: Scalars['Float'];
  sectionId: Scalars['ID'];
  weekId: Scalars['ID'];
};

/** Type of module section */
export enum ModuleSectionType {
  ArticleLesson = 'ArticleLesson',
  Assessment = 'Assessment',
  Assignment = 'Assignment',
  CommitmentLesson = 'CommitmentLesson',
  Maintainers = 'Maintainers',
  Quiz = 'Quiz',
  QuizAssessment = 'QuizAssessment',
  SubjectDiscussion = 'SubjectDiscussion',
  VideoLesson = 'VideoLesson'
}

export type Mutation = {
  __typename?: 'Mutation';
  addAdditionalQuestionToAssessment: AdditionalAssessmentQuestion;
  addAdditionalReadingLinkToModuleSection: Module;
  addAssessmentSectionToModule: Scalars['Boolean'];
  addAssignmentSectionToModule: Scalars['Boolean'];
  addDiscussionSectionToModule: Scalars['Boolean'];
  addEducationEntry: EducationEntry;
  addEducationEntryForUser: EducationEntry;
  addEmploymentEntry: EmploymentEntry;
  addEmploymentEntryForUser: EmploymentEntry;
  addLabelToProgram: ProgramLabel;
  addLearnerToGroup: Group;
  addLessonSectionToModule: Scalars['Boolean'];
  addMaintainerForProgram: Scalars['Boolean'];
  addMaintainersSectionToModule: Scalars['Boolean'];
  addManagersToProgram: Scalars['Boolean'];
  addMessageToDiscussion: DiscussionMessage;
  addModuleAssignmentSection: ModuleAssignmentSection;
  addModuleToProgramWeek: Scalars['Boolean'];
  addProgramWeek: ProgramWeek;
  addQuizAssessmentAspect: QuizAssessmentAspect;
  addQuizAssessmentQuestion: QuizAssessmentQuestion;
  addQuizAssessmentSectionToModule: Scalars['Boolean'];
  addQuizQuestion: QuizQuestion;
  addQuizSectionToModule: Scalars['Boolean'];
  addSectionToAssessment: AssessmentSection;
  addTutorsToGroupingSetup: GroupingSetup;
  addVideoGlossary: VideoGlossary;
  addVideoOverlay: VideoOverlay;
  addVideoSubtitle: VideoSubtitle;
  assignTutorToGroup: Scalars['Boolean'];
  assureIntegrityOfUsers: Scalars['Int'];
  attachPeerReviewAssessmentToModuleAssignment: Scalars['Boolean'];
  automaticallyAssignPointsForPastActions: Scalars['Boolean'];
  broadcastMessageToAllGroupsInProgram: BroadcastResult;
  broadcastMessageToGroups: Scalars['Boolean'];
  chargeCard?: Maybe<Payment>;
  cleanupProgressForProgram: Scalars['Boolean'];
  cleanupPublicEvidencesOfUsers: Scalars['Boolean'];
  cleanupSystemFromUser: Scalars['Boolean'];
  cloneProgramContent: Program;
  closeProgram: Scalars['Boolean'];
  completeModuleSection: Scalars['Boolean'];
  confirmPrimaryEmail: Scalars['String'];
  confirmUsers: Scalars['Int'];
  createArticleLesson: ArticleLesson;
  createAssessment: Assessment;
  createAssessmentQuotient: AssessmentQuotient;
  createAssessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusion;
  createCategory: Category;
  createCommitmentLesson: CommitmentLesson;
  createCountry: Country;
  createEmptyGroupsForIdleTutorsInProgram: Scalars['Int'];
  createGalleryFolder: GalleryFolder;
  createGroup: Group;
  createGroupProject: GroupProject;
  createHardSkill: Skill;
  createInVideoQuiz: InVideoQuiz;
  createLanguage: Language;
  createMinistry: Ministry;
  createMissingContentDiscussionsForProgram: Scalars['Int'];
  createModule: Module;
  createModuleAssignment: ModuleAssignment;
  createPhase: Phase;
  createPlatform: Platform;
  createProgram: Program;
  createProgramLicence: ProgramLicence;
  createProgramMaintainer: ProgramMaintainer;
  createQuiz: Quiz;
  createQuizAssessment: QuizAssessment;
  createScaleCaption: ScaleCaption;
  createSoftSkill: Skill;
  createTopicDiscussionForGroups: Discussion;
  createVideoLesson: VideoLesson;
  disbandGroup: Scalars['Int'];
  downvoteDiscussionMessage: Scalars['Boolean'];
  enrollToProgram: Scalars['Boolean'];
  fetchAndViewNotifications: Array<PlatformNotification>;
  finalizeModuleAssignmentSubmission: Scalars['Boolean'];
  finishAttachSecondaryEmail: User;
  finishEmailSubstitution: User;
  finishResetPassword: Session;
  forceResetPasswordForUser: Scalars['Boolean'];
  generateTestPlatformNotifications: Array<PlatformNotification>;
  inviteUsersToEnrollProgram: Scalars['Boolean'];
  leavePlatformFeedback: PlatformFeedback;
  login: Session;
  logout: Scalars['Boolean'];
  markAllNotificationsAsRead: Scalars['Boolean'];
  markChatMessagesAsRead: Scalars['Boolean'];
  markDiscussionAsActive: Scalars['Boolean'];
  markModuleSectionAsVisited: Scalars['Boolean'];
  markNotificationAsRead: Scalars['Boolean'];
  markNotificationAsViewed: Scalars['Boolean'];
  markProgramModuleAsVisited: Scalars['Boolean'];
  markProgramWeekAsVisited: Scalars['Boolean'];
  mobileLogin: Session;
  openProgram: Scalars['Boolean'];
  pokeProgramInvitations: ProgramInvitationPokeResult;
  provideChatChannelForMeAndMembers: ChatChannel;
  publishProgram: Scalars['Boolean'];
  refreshToken: Scalars['String'];
  registerUser: Session;
  removeAdditionalQuestionInAssessment: Scalars['Boolean'];
  removeAdditionalReadingLinkFromModuleSection: Module;
  removeAllMaintainersFromProgram: Scalars['Boolean'];
  removeArticleLesson: Scalars['Boolean'];
  removeAssessment: Scalars['Boolean'];
  removeAssessmentQuotient: Scalars['Boolean'];
  removeAssessmentQuotientChoiceConclusion: Scalars['Boolean'];
  removeCategory: Scalars['Boolean'];
  removeCommitmentLesson: Scalars['Boolean'];
  removeCountry: Scalars['Boolean'];
  removeDiscussion: Scalars['Boolean'];
  removeDiscussionByAdmin: Scalars['Boolean'];
  removeEducationEntry: Scalars['Boolean'];
  removeEducationEntryForUser: Scalars['Boolean'];
  removeEmploymentEntry: Scalars['Boolean'];
  removeEmploymentEntryForUser: Scalars['Boolean'];
  removeGalleryFolder: Scalars['Boolean'];
  removeGroup: Scalars['Boolean'];
  removeGroupProject: Scalars['Boolean'];
  removeGroupingForProgram: Scalars['Boolean'];
  removeHardSkill: Scalars['Boolean'];
  removeImageFromGallery: Scalars['Boolean'];
  removeInVideoQuiz: Scalars['Boolean'];
  removeLabelFromProgram: Scalars['Boolean'];
  removeLanguage: Scalars['Boolean'];
  removeLearnerFromGroup: Scalars['Boolean'];
  removeMaintainerFromProgram: Scalars['Boolean'];
  removeManagersFromProgram: Scalars['Boolean'];
  removeMessageFromDiscussion: Scalars['Boolean'];
  removeMinistry: Scalars['Boolean'];
  removeModule: Scalars['Boolean'];
  removeModuleAssignment: Scalars['Boolean'];
  removeModuleAssignmentSection: Scalars['Boolean'];
  removeModuleFromProgramWeek: Scalars['Boolean'];
  removeNotificationRedirect: Scalars['Boolean'];
  removePhase: Scalars['Boolean'];
  removeProgram: Scalars['Boolean'];
  removeProgramLicence: Scalars['Boolean'];
  removeProgramMaintainer: Scalars['Boolean'];
  removeProgramWeek: Scalars['Boolean'];
  removeQuiz: Scalars['Boolean'];
  removeQuizAssessment: Scalars['Boolean'];
  removeQuizAssessmentAspect: Scalars['Boolean'];
  removeQuizAssessmentQuestion: Scalars['Boolean'];
  removeQuizQuestion: Scalars['Boolean'];
  removeRegion: Scalars['Boolean'];
  removeScaleCaption: Scalars['Boolean'];
  removeSectionFromModule: Scalars['Boolean'];
  removeSectionInAssessment: Scalars['Boolean'];
  removeSoftSkill: Scalars['Boolean'];
  removeTutorFromGroup: Scalars['Boolean'];
  removeTutorsFromProgramGroupingPreferences: RemoveTutorsFromGroupingResult;
  removeVideoGlossary: Scalars['Boolean'];
  removeVideoLesson: Scalars['Boolean'];
  removeVideoOverlay: Scalars['Boolean'];
  removeVideoSubtitle: Scalars['Boolean'];
  renameGroup: Scalars['Boolean'];
  replyToDiscussionMessage: DiscussionMessage;
  repostMessageToDiscussions: Scalars['Boolean'];
  resendPrimaryEmailConfirmation: Scalars['Boolean'];
  resetTours: Scalars['Boolean'];
  rewriteHardSkills: Scalars['Boolean'];
  rewriteHardSkillsForUser: Scalars['Boolean'];
  rewriteOtherSkills: Scalars['Boolean'];
  rewriteOtherSkillsForUser: Scalars['Boolean'];
  rewriteSoftSkills: Scalars['Boolean'];
  rewriteSoftSkillsForUser: Scalars['Boolean'];
  sendDirectChatMessageToMultipleContacts: Array<ChatChannel>;
  sendMessageToChatChannel: ChatMessage;
  sendMessageToChatChannels: Array<ChatMessage>;
  setEmploymentStatus: Scalars['Boolean'];
  setEmploymentStatusForUser: Scalars['Boolean'];
  setNotificationRedirect: NotificationRedirect;
  setTypingInChatChannel: Scalars['Boolean'];
  setUserLanguage: Scalars['Boolean'];
  setupGroupingForProgram: GroupingSetup;
  startAttachSecondaryEmail: Scalars['Boolean'];
  startEmailSubstitution: Scalars['Boolean'];
  startResetPassword: Scalars['Boolean'];
  submitAssessment: AssessmentSubmission;
  submitAssignment: AssignmentSubmission;
  submitAssignmentSubmissionReview: AssignmentSubmissionReview;
  submitGroupProject: GroupProjectSubmission;
  submitGroupProjectReview: GroupProjectReview;
  submitHelpRequest: Scalars['Boolean'];
  submitInVideoQuizAttempt: QuizAttempt;
  submitModuleSatisfactionFeedback: SatisfactionFeedback;
  submitPeerReviewForModuleAssignment: AssignmentPeerReview;
  submitQuizAssessmentAttempt: QuizAssessmentAttempt;
  submitQuizAttempt: QuizAttempt;
  substitutePassword: Scalars['Boolean'];
  terminateProgram: Scalars['Boolean'];
  testEarnedRewardNotification: Scalars['Boolean'];
  testEmailNotification: Scalars['Boolean'];
  testPlatformNotification: Scalars['Boolean'];
  upPublishProgram: Scalars['Boolean'];
  updateAdditionalQuestionInAssessment: Scalars['Boolean'];
  updateArticleLesson: Scalars['Boolean'];
  updateAssessmentDetails: Scalars['Boolean'];
  updateAssessmentQuotient: Scalars['Boolean'];
  updateAssessmentQuotientChoiceConclusion: Scalars['Boolean'];
  updateAssignmentSubmissionReview: Scalars['Boolean'];
  updateAutomaticGroupingSettingForProgram: Scalars['Boolean'];
  updateCategory: Scalars['Boolean'];
  updateCommitmentLesson: Scalars['Boolean'];
  updateCountry: Scalars['Boolean'];
  updateDiscussion: Scalars['Boolean'];
  updateDiscussionForGroups: Scalars['Boolean'];
  updateEducationEntry: User;
  updateEducationEntryForUser: User;
  updateEmploymentEntry: User;
  updateEmploymentEntryForUser: User;
  updateGalleryFolder: Scalars['Boolean'];
  updateGroupProject: Scalars['Boolean'];
  updateGroupProjectReview: Scalars['Boolean'];
  updateHardSkill: Scalars['Boolean'];
  updateInVideoQuiz: Scalars['Boolean'];
  updateIsOnlineOnlySettingForProgram: Scalars['Boolean'];
  updateIsTestFlagForUsers: Scalars['Boolean'];
  updateLabelInProgram: Program;
  updateLanguage: Scalars['Boolean'];
  updateMessageInDiscussion: Scalars['Boolean'];
  updateMinistry: Scalars['Boolean'];
  updateModule: Scalars['Boolean'];
  updateModuleAssignment: Scalars['Boolean'];
  updateModuleAssignmentSection: ModuleAssignment;
  updateModuleOrder: Scalars['Boolean'];
  updateMyPlatformColors: Scalars['Boolean'];
  updateMyPlatformSubDomain: Scalars['Boolean'];
  updateNotificationsSettings: User;
  updatePersonalDetails: Scalars['Boolean'];
  updatePersonalDetailsForUser: Scalars['Boolean'];
  updatePhase: Scalars['Boolean'];
  updatePhoneNumberForUser: Scalars['Boolean'];
  updatePinnedStateForDiscussionMessage: Scalars['Boolean'];
  updatePlatformVar: PlatformVar;
  updatePrimaryEmailForUser: Scalars['Boolean'];
  updateProgram: Scalars['Boolean'];
  updateProgramLicence: Scalars['Boolean'];
  updateProgramMaintainer: Scalars['Boolean'];
  updateProgramWeek: Program;
  updateQuiz: Scalars['Boolean'];
  updateQuizAssessment: Scalars['Boolean'];
  updateQuizAssessmentAspect: Scalars['Boolean'];
  updateQuizAssessmentQuestion: Scalars['Boolean'];
  updateQuizQuestion: Quiz;
  updateRoleForUsers: Scalars['Int'];
  updateScaleCaption: Scalars['Boolean'];
  updateSecondaryEmailForUser: Scalars['Boolean'];
  updateSection: Scalars['Boolean'];
  updateSectionInAssessment: Scalars['Boolean'];
  updateSectionOrder: Scalars['Boolean'];
  updateSoftSkill: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
  updateUserRole: Scalars['Boolean'];
  updateVideoLesson: Scalars['Boolean'];
  updateVideoOverlay: Scalars['Boolean'];
  updateVideoSubtitle: Scalars['Boolean'];
  upsertRegion: Region;
  upvoteDiscussionMessage: Scalars['Boolean'];
  useTour: Scalars['Boolean'];
};


export type MutationAddAdditionalQuestionToAssessmentArgs = {
  additionalAssessmentQuestion: AdditionalAssessmentQuestionInput;
  assessmentId: Scalars['ID'];
};


export type MutationAddAdditionalReadingLinkToModuleSectionArgs = {
  link: Scalars['String'];
  moduleId: Scalars['ID'];
  moduleSectionId: Scalars['ID'];
  title?: Maybe<TranslationsInput>;
};


export type MutationAddAssessmentSectionToModuleArgs = {
  assessmentId: Scalars['ID'];
  moduleId: Scalars['ID'];
  section: SectionInput;
};


export type MutationAddAssignmentSectionToModuleArgs = {
  assignmentId: Scalars['ID'];
  moduleId: Scalars['ID'];
  section: SectionInput;
};


export type MutationAddDiscussionSectionToModuleArgs = {
  discussion: ModuleDiscussionInput;
  moduleId: Scalars['ID'];
  section: SectionInput;
};


export type MutationAddEducationEntryArgs = {
  educationEntry: EducationEntryInput;
};


export type MutationAddEducationEntryForUserArgs = {
  educationEntry: EducationEntryInput;
  userId: Scalars['ID'];
};


export type MutationAddEmploymentEntryArgs = {
  entry: EmploymentEntryInput;
};


export type MutationAddEmploymentEntryForUserArgs = {
  entry: EmploymentEntryInput;
  userId: Scalars['ID'];
};


export type MutationAddLabelToProgramArgs = {
  label: ProgramLabelInput;
  programId: Scalars['ID'];
};


export type MutationAddLearnerToGroupArgs = {
  groupId: Scalars['ID'];
  learnerId: Scalars['ID'];
};


export type MutationAddLessonSectionToModuleArgs = {
  lessonId: Scalars['ID'];
  moduleId: Scalars['ID'];
  section: SectionInput;
};


export type MutationAddMaintainerForProgramArgs = {
  maintainerId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationAddMaintainersSectionToModuleArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  section: SectionInput;
};


export type MutationAddManagersToProgramArgs = {
  programId: Scalars['ID'];
  usersIds: Array<Scalars['ID']>;
};


export type MutationAddMessageToDiscussionArgs = {
  discussionId: Scalars['ID'];
  message: DiscussionMessageInput;
};


export type MutationAddModuleAssignmentSectionArgs = {
  moduleAssignment: Scalars['ID'];
  moduleAssignmentSection: ModuleAssignmentSectionInput;
};


export type MutationAddModuleToProgramWeekArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  programWeekId: Scalars['ID'];
};


export type MutationAddProgramWeekArgs = {
  program: Scalars['ID'];
  programWeek: ProgramWeekInput;
};


export type MutationAddQuizAssessmentAspectArgs = {
  aspect: QuizAssessmentAspectInput;
  quiz: Scalars['ID'];
};


export type MutationAddQuizAssessmentQuestionArgs = {
  question: QuizAssessmentQuestionInput;
  quiz: Scalars['ID'];
};


export type MutationAddQuizAssessmentSectionToModuleArgs = {
  moduleId: Scalars['ID'];
  quizAssessmentId: Scalars['ID'];
  section: SectionInput;
};


export type MutationAddQuizQuestionArgs = {
  quiz: Scalars['ID'];
  quizQuestion: QuizQuestionInput;
};


export type MutationAddQuizSectionToModuleArgs = {
  moduleId: Scalars['ID'];
  quizId: Scalars['ID'];
  section: SectionInput;
};


export type MutationAddSectionToAssessmentArgs = {
  assessmentId: Scalars['ID'];
  assessmentSection: AssessmentSectionInput;
};


export type MutationAddTutorsToGroupingSetupArgs = {
  programId: Scalars['ID'];
  tutors: Array<Scalars['ID']>;
};


export type MutationAddVideoGlossaryArgs = {
  videoGlossary: VideoGlossaryInput;
  videoLessonId: Scalars['ID'];
};


export type MutationAddVideoOverlayArgs = {
  videoLessonId: Scalars['ID'];
  videoOverlay: VideoOverlayInput;
};


export type MutationAddVideoSubtitleArgs = {
  videoLessonId: Scalars['ID'];
  videoSubtitle: VideoSubtitleInput;
};


export type MutationAssignTutorToGroupArgs = {
  groupId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationAssureIntegrityOfUsersArgs = {
  source: UserSource;
};


export type MutationAttachPeerReviewAssessmentToModuleAssignmentArgs = {
  moduleAssignmentId: Scalars['ID'];
  peerReviewAssessmentId: Scalars['ID'];
};


export type MutationAutomaticallyAssignPointsForPastActionsArgs = {
  programId: Scalars['ID'];
};


export type MutationBroadcastMessageToAllGroupsInProgramArgs = {
  message: DiscussionMessageInput;
  programId: Scalars['ID'];
};


export type MutationBroadcastMessageToGroupsArgs = {
  message: DiscussionMessageInput;
  toGroups: Array<Scalars['ID']>;
};


export type MutationChargeCardArgs = {
  payment: PaymentInput;
};


export type MutationCleanupProgressForProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationCleanupPublicEvidencesOfUsersArgs = {
  emails: Array<Scalars['String']>;
};


export type MutationCleanupSystemFromUserArgs = {
  emails: Array<Scalars['String']>;
};


export type MutationCloneProgramContentArgs = {
  extra?: Maybe<CloneProgramContentExtraInput>;
  programId: Scalars['ID'];
};


export type MutationCloseProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationCompleteModuleSectionArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  sectionId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type MutationConfirmPrimaryEmailArgs = {
  acknowledgementToken: Scalars['String'];
};


export type MutationConfirmUsersArgs = {
  usersIds: Array<Scalars['ID']>;
};


export type MutationCreateArticleLessonArgs = {
  articleLesson: ArticleLessonInput;
};


export type MutationCreateAssessmentArgs = {
  assessment: CreateAssessmentInput;
};


export type MutationCreateAssessmentQuotientArgs = {
  assessmentQuotient: AssessmentQuotientInput;
};


export type MutationCreateAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusionInput;
};


export type MutationCreateCategoryArgs = {
  category: CategoryInput;
};


export type MutationCreateCommitmentLessonArgs = {
  commitmentLesson: CommitmentLessonInput;
};


export type MutationCreateCountryArgs = {
  country: CountryInput;
};


export type MutationCreateEmptyGroupsForIdleTutorsInProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationCreateGalleryFolderArgs = {
  galleryFolder: GalleryFolderInput;
};


export type MutationCreateGroupArgs = {
  programId: Scalars['ID'];
};


export type MutationCreateGroupProjectArgs = {
  groupProject: GroupProjectInput;
};


export type MutationCreateHardSkillArgs = {
  skill: SkillInput;
};


export type MutationCreateInVideoQuizArgs = {
  inVideoQuiz: InVideoQuizInput;
};


export type MutationCreateLanguageArgs = {
  language: LanguageInput;
};


export type MutationCreateMinistryArgs = {
  ministry: MinistryInput;
};


export type MutationCreateMissingContentDiscussionsForProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationCreateModuleArgs = {
  module: ModuleInput;
};


export type MutationCreateModuleAssignmentArgs = {
  moduleAssignment: CreateModuleAssignmentInput;
};


export type MutationCreatePhaseArgs = {
  phase: PhaseInput;
};


export type MutationCreatePlatformArgs = {
  platformInput: PlatformInput;
};


export type MutationCreateProgramArgs = {
  program: ProgramInput;
};


export type MutationCreateProgramLicenceArgs = {
  programLicenceInput: ProgramLicenceInput;
};


export type MutationCreateProgramMaintainerArgs = {
  programMaintainer: ProgramMaintainerInput;
};


export type MutationCreateQuizArgs = {
  quiz: QuizInput;
};


export type MutationCreateQuizAssessmentArgs = {
  quiz: QuizAssessmentInput;
};


export type MutationCreateScaleCaptionArgs = {
  scaleCaption: ScaleCaptionInput;
};


export type MutationCreateSoftSkillArgs = {
  skill: SkillInput;
};


export type MutationCreateTopicDiscussionForGroupsArgs = {
  discussion: DiscussionForGroupsInput;
};


export type MutationCreateVideoLessonArgs = {
  videoLesson: VideoLessonInput;
};


export type MutationDisbandGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationDownvoteDiscussionMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationEnrollToProgramArgs = {
  programId: Scalars['ID'];
  programLicence?: Maybe<Scalars['String']>;
};


export type MutationFetchAndViewNotificationsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  dateRange?: Maybe<DateRangeInput>;
};


export type MutationFinalizeModuleAssignmentSubmissionArgs = {
  assignmentSubmissionId: Scalars['ID'];
};


export type MutationFinishAttachSecondaryEmailArgs = {
  acknowledgementToken: Scalars['String'];
};


export type MutationFinishEmailSubstitutionArgs = {
  acknowledgementToken: Scalars['String'];
};


export type MutationFinishResetPasswordArgs = {
  recover: FinishResetPasswordInput;
};


export type MutationForceResetPasswordForUserArgs = {
  email: Scalars['String'];
  reset: ResetPasswordInput;
};


export type MutationGenerateTestPlatformNotificationsArgs = {
  forUser: Scalars['ID'];
  length?: Maybe<Scalars['Int']>;
};


export type MutationInviteUsersToEnrollProgramArgs = {
  invitations: Array<UserInvitationInput>;
  programId: Scalars['ID'];
};


export type MutationLeavePlatformFeedbackArgs = {
  feedback: PlatformFeedbackInput;
};


export type MutationLoginArgs = {
  credentials: CredentialsInput;
};


export type MutationMarkAllNotificationsAsReadArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  dateRange?: Maybe<DateRangeInput>;
};


export type MutationMarkChatMessagesAsReadArgs = {
  beforeDateTime?: Maybe<Scalars['Date']>;
  channelId: Scalars['ID'];
};


export type MutationMarkDiscussionAsActiveArgs = {
  discussionId: Scalars['ID'];
};


export type MutationMarkModuleSectionAsVisitedArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  sectionId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['ID'];
};


export type MutationMarkNotificationAsViewedArgs = {
  id: Scalars['ID'];
};


export type MutationMarkProgramModuleAsVisitedArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type MutationMarkProgramWeekAsVisitedArgs = {
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type MutationMobileLoginArgs = {
  credentials: CredentialsInput;
};


export type MutationOpenProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationPokeProgramInvitationsArgs = {
  invitations: Array<UserInvitationInput>;
  programId: Scalars['ID'];
};


export type MutationProvideChatChannelForMeAndMembersArgs = {
  membersIds: Array<Scalars['ID']>;
};


export type MutationPublishProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationRegisterUserArgs = {
  opts?: Maybe<RegistrationOptsInput>;
  user: CreateUserInput;
};


export type MutationRemoveAdditionalQuestionInAssessmentArgs = {
  additionalAssessmentQuestionId: Scalars['ID'];
  assessmentId: Scalars['ID'];
};


export type MutationRemoveAdditionalReadingLinkFromModuleSectionArgs = {
  linkId: Scalars['ID'];
  moduleId: Scalars['ID'];
  moduleSectionId: Scalars['ID'];
};


export type MutationRemoveAllMaintainersFromProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationRemoveArticleLessonArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveAssessmentArgs = {
  assessmentId: Scalars['ID'];
};


export type MutationRemoveAssessmentQuotientArgs = {
  assessmentQuotientId: Scalars['ID'];
};


export type MutationRemoveAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusionId: Scalars['ID'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCommitmentLessonArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveCountryArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type MutationRemoveDiscussionByAdminArgs = {
  discussionId: Scalars['ID'];
};


export type MutationRemoveEducationEntryArgs = {
  educationEntryId: Scalars['ID'];
};


export type MutationRemoveEducationEntryForUserArgs = {
  educationEntryId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationRemoveEmploymentEntryArgs = {
  entryId: Scalars['ID'];
};


export type MutationRemoveEmploymentEntryForUserArgs = {
  entryId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationRemoveGalleryFolderArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationRemoveGroupProjectArgs = {
  groupProjectId: Scalars['ID'];
};


export type MutationRemoveGroupingForProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationRemoveHardSkillArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveImageFromGalleryArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveInVideoQuizArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveLabelFromProgramArgs = {
  programId: Scalars['ID'];
  programLabelId: Scalars['ID'];
};


export type MutationRemoveLanguageArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveLearnerFromGroupArgs = {
  groupId: Scalars['ID'];
  learnerId: Scalars['ID'];
};


export type MutationRemoveMaintainerFromProgramArgs = {
  maintainerId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationRemoveManagersFromProgramArgs = {
  programId: Scalars['ID'];
  usersIds: Array<Scalars['ID']>;
};


export type MutationRemoveMessageFromDiscussionArgs = {
  messageId: Scalars['ID'];
};


export type MutationRemoveMinistryArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveModuleArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveModuleAssignmentArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveModuleAssignmentSectionArgs = {
  moduleAssignment: Scalars['ID'];
  moduleAssignmentSectionId: Scalars['ID'];
};


export type MutationRemoveModuleFromProgramWeekArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  programWeekId: Scalars['ID'];
};


export type MutationRemoveNotificationRedirectArgs = {
  redirectId: Scalars['ID'];
};


export type MutationRemovePhaseArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationRemoveProgramLicenceArgs = {
  programLicenceId: Scalars['ID'];
};


export type MutationRemoveProgramMaintainerArgs = {
  programMaintainerId: Scalars['ID'];
};


export type MutationRemoveProgramWeekArgs = {
  program: Scalars['ID'];
  programWeekId: Scalars['ID'];
};


export type MutationRemoveQuizArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveQuizAssessmentArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveQuizAssessmentAspectArgs = {
  aspectId: Scalars['ID'];
  quiz: Scalars['ID'];
};


export type MutationRemoveQuizAssessmentQuestionArgs = {
  questionId: Scalars['ID'];
  quiz: Scalars['ID'];
};


export type MutationRemoveQuizQuestionArgs = {
  quiz: Scalars['ID'];
  quizQuestionId: Scalars['ID'];
};


export type MutationRemoveRegionArgs = {
  code: Scalars['String'];
};


export type MutationRemoveScaleCaptionArgs = {
  scaleCaptionId: Scalars['ID'];
};


export type MutationRemoveSectionFromModuleArgs = {
  moduleId: Scalars['ID'];
  sectionId: Scalars['ID'];
};


export type MutationRemoveSectionInAssessmentArgs = {
  assessmentId: Scalars['ID'];
  assessmentSectionId: Scalars['ID'];
};


export type MutationRemoveSoftSkillArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveTutorFromGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationRemoveTutorsFromProgramGroupingPreferencesArgs = {
  byTutorsEmails?: Maybe<Array<Scalars['String']>>;
  byTutorsIds?: Maybe<Array<Scalars['ID']>>;
  disbandGroups?: Maybe<Scalars['Boolean']>;
  programId: Scalars['ID'];
};


export type MutationRemoveVideoGlossaryArgs = {
  videoGlossaryId: Scalars['ID'];
  videoLessonId: Scalars['ID'];
};


export type MutationRemoveVideoLessonArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveVideoOverlayArgs = {
  videoLessonId: Scalars['ID'];
  videoOverlayId: Scalars['ID'];
};


export type MutationRemoveVideoSubtitleArgs = {
  videoLessonId: Scalars['ID'];
  videoSubtitleId: Scalars['ID'];
};


export type MutationRenameGroupArgs = {
  groupId: Scalars['ID'];
  newName: Scalars['String'];
};


export type MutationReplyToDiscussionMessageArgs = {
  message: DiscussionMessageInput;
  parentId: Scalars['ID'];
};


export type MutationRepostMessageToDiscussionsArgs = {
  discussionsIds: Array<Scalars['ID']>;
  messageId: Scalars['ID'];
};


export type MutationResendPrimaryEmailConfirmationArgs = {
  opts?: Maybe<PrimaryEmailOptsInput>;
};


export type MutationResetToursArgs = {
  tours?: Maybe<Array<PlatformTour>>;
};


export type MutationRewriteHardSkillsArgs = {
  skills: Array<Scalars['ID']>;
};


export type MutationRewriteHardSkillsForUserArgs = {
  skills: Array<Scalars['ID']>;
  userId: Scalars['ID'];
};


export type MutationRewriteOtherSkillsArgs = {
  skills: Array<Scalars['String']>;
};


export type MutationRewriteOtherSkillsForUserArgs = {
  skills: Array<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationRewriteSoftSkillsArgs = {
  skills: Array<Scalars['ID']>;
};


export type MutationRewriteSoftSkillsForUserArgs = {
  skills: Array<Scalars['ID']>;
  userId: Scalars['ID'];
};


export type MutationSendDirectChatMessageToMultipleContactsArgs = {
  membersIds: Array<Scalars['ID']>;
  message: Scalars['String'];
};


export type MutationSendMessageToChatChannelArgs = {
  channelClue: Scalars['String'];
  membersIds?: Maybe<Array<Scalars['ID']>>;
  message: Scalars['String'];
};


export type MutationSendMessageToChatChannelsArgs = {
  channelIds: Array<Scalars['ID']>;
  message: Scalars['String'];
};


export type MutationSetEmploymentStatusArgs = {
  isUnemployed: Scalars['Boolean'];
};


export type MutationSetEmploymentStatusForUserArgs = {
  isUnemployed: Scalars['Boolean'];
  userId: Scalars['ID'];
};


export type MutationSetNotificationRedirectArgs = {
  redirect: NotificationRedirectInput;
};


export type MutationSetTypingInChatChannelArgs = {
  typing: TypingInChatChannelInput;
};


export type MutationSetUserLanguageArgs = {
  language: SupportedLanguage;
};


export type MutationSetupGroupingForProgramArgs = {
  programId: Scalars['ID'];
  setup: GroupingSetupInput;
};


export type MutationStartAttachSecondaryEmailArgs = {
  secondaryEmailInput: SecondaryEmailInput;
};


export type MutationStartEmailSubstitutionArgs = {
  substitution: EmailSubstitutionInput;
};


export type MutationStartResetPasswordArgs = {
  recover: StartResetPasswordInput;
};


export type MutationSubmitAssessmentArgs = {
  assessmentSubmission: AssessmentSubmissionInput;
  programId: Scalars['ID'];
};


export type MutationSubmitAssignmentArgs = {
  assignmentSubmission: AssignmentSubmissionInput;
  programId: Scalars['ID'];
};


export type MutationSubmitAssignmentSubmissionReviewArgs = {
  assignmentSubmissionReviewInput: AssignmentSubmissionReviewInput;
};


export type MutationSubmitGroupProjectArgs = {
  submission: GroupProjectSubmissionInput;
};


export type MutationSubmitGroupProjectReviewArgs = {
  groupProjectReviewInput: GroupProjectReviewInput;
};


export type MutationSubmitHelpRequestArgs = {
  helpRequest: HelpRequestInput;
};


export type MutationSubmitInVideoQuizAttemptArgs = {
  inVideoQuizId: Scalars['ID'];
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
  quizAttempt: QuizAttemptInput;
};


export type MutationSubmitModuleSatisfactionFeedbackArgs = {
  feedback: SatisfactionFeedbackInput;
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type MutationSubmitPeerReviewForModuleAssignmentArgs = {
  assignmentPeerReview: AssignmentPeerReviewInput;
};


export type MutationSubmitQuizAssessmentAttemptArgs = {
  attempt: QuizAssessmentAttemptInput;
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
  quizAssessmentId: Scalars['ID'];
};


export type MutationSubmitQuizAttemptArgs = {
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
  quizAttempt: QuizAttemptInput;
  quizId: Scalars['ID'];
};


export type MutationSubstitutePasswordArgs = {
  substitution: PasswordSubstitutionInput;
};


export type MutationTerminateProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationTestEarnedRewardNotificationArgs = {
  earnedReward: TestEarnedRewardInput;
  meta: TestEarnedRewardMetaInput;
};


export type MutationTestEmailNotificationArgs = {
  testInput: TestEmailNotificationInput;
};


export type MutationTestPlatformNotificationArgs = {
  testInput: TestPlatformNotificationInput;
};


export type MutationUpPublishProgramArgs = {
  programId: Scalars['ID'];
};


export type MutationUpdateAdditionalQuestionInAssessmentArgs = {
  additionalAssessmentQuestion: AdditionalAssessmentQuestionInput;
  additionalAssessmentQuestionId: Scalars['ID'];
  assessmentId: Scalars['ID'];
};


export type MutationUpdateArticleLessonArgs = {
  articleLesson: ArticleLessonInput;
  id: Scalars['ID'];
};


export type MutationUpdateAssessmentDetailsArgs = {
  assessment: UpdateAssessmentDetailsInput;
  assessmentId: Scalars['ID'];
};


export type MutationUpdateAssessmentQuotientArgs = {
  assessmentQuotient: AssessmentQuotientInput;
  assessmentQuotientId: Scalars['ID'];
};


export type MutationUpdateAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusionInput;
  assessmentQuotientChoiceConclusionId: Scalars['ID'];
};


export type MutationUpdateAssignmentSubmissionReviewArgs = {
  assignmentSubmissionReviewId: Scalars['ID'];
  feedbackText: Scalars['String'];
};


export type MutationUpdateAutomaticGroupingSettingForProgramArgs = {
  enable: Scalars['Boolean'];
  programId: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  category: CategoryInput;
  id: Scalars['ID'];
};


export type MutationUpdateCommitmentLessonArgs = {
  commitmentLesson: CommitmentLessonInput;
  id: Scalars['ID'];
};


export type MutationUpdateCountryArgs = {
  country: CountryInput;
  id: Scalars['ID'];
};


export type MutationUpdateDiscussionArgs = {
  discussion: ModuleDiscussionInput;
  discussionId: Scalars['ID'];
};


export type MutationUpdateDiscussionForGroupsArgs = {
  discussion: UpdateDiscussionForGroupsInput;
  discussionId: Scalars['ID'];
};


export type MutationUpdateEducationEntryArgs = {
  educationEntry: EducationEntryInput;
  educationEntryId: Scalars['ID'];
};


export type MutationUpdateEducationEntryForUserArgs = {
  educationEntry: EducationEntryInput;
  educationEntryId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationUpdateEmploymentEntryArgs = {
  entry: EmploymentEntryInput;
  entryId: Scalars['ID'];
};


export type MutationUpdateEmploymentEntryForUserArgs = {
  entry: EmploymentEntryInput;
  entryId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationUpdateGalleryFolderArgs = {
  galleryFolder: GalleryFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateGroupProjectArgs = {
  groupProject: GroupProjectInput;
  groupProjectId: Scalars['ID'];
};


export type MutationUpdateGroupProjectReviewArgs = {
  feedbackText: Scalars['String'];
  groupProjectReviewId: Scalars['ID'];
};


export type MutationUpdateHardSkillArgs = {
  id: Scalars['ID'];
  skill: SkillInput;
};


export type MutationUpdateInVideoQuizArgs = {
  id: Scalars['ID'];
  inVideoQuiz: InVideoQuizInput;
};


export type MutationUpdateIsOnlineOnlySettingForProgramArgs = {
  enable: Scalars['Boolean'];
  programId: Scalars['ID'];
};


export type MutationUpdateIsTestFlagForUsersArgs = {
  emails: Array<Scalars['String']>;
  isTest: Scalars['Boolean'];
};


export type MutationUpdateLabelInProgramArgs = {
  programId: Scalars['ID'];
  programLabel: ProgramLabelInput;
  programLabelId: Scalars['ID'];
};


export type MutationUpdateLanguageArgs = {
  id: Scalars['ID'];
  language: LanguageInput;
};


export type MutationUpdateMessageInDiscussionArgs = {
  message: UpdateDiscussionMessageInput;
  messageId: Scalars['ID'];
};


export type MutationUpdateMinistryArgs = {
  id: Scalars['ID'];
  ministry: MinistryInput;
};


export type MutationUpdateModuleArgs = {
  id: Scalars['ID'];
  module: ModuleInput;
};


export type MutationUpdateModuleAssignmentArgs = {
  id: Scalars['ID'];
  moduleAssignment: ModuleAssignmentInput;
};


export type MutationUpdateModuleAssignmentSectionArgs = {
  moduleAssignment: Scalars['ID'];
  moduleAssignmentSection: ModuleAssignmentSectionInput;
  moduleAssignmentSectionId: Scalars['ID'];
};


export type MutationUpdateModuleOrderArgs = {
  moduleId: Scalars['ID'];
  order: Scalars['Long'];
};


export type MutationUpdateMyPlatformColorsArgs = {
  platformThemeInput: PlatformThemeInput;
  subdomain: Scalars['String'];
};


export type MutationUpdateMyPlatformSubDomainArgs = {
  updatePlatformSubDomainInput: UpdatePlatformSubDomainInput;
};


export type MutationUpdateNotificationsSettingsArgs = {
  settings: UpdateNotificationsSettingsInput;
};


export type MutationUpdatePersonalDetailsArgs = {
  personal: UpdatePersonalDetailsInput;
};


export type MutationUpdatePersonalDetailsForUserArgs = {
  personal: UpdatePersonalDetailsInput;
  userId: Scalars['ID'];
};


export type MutationUpdatePhaseArgs = {
  id: Scalars['ID'];
  phase: PhaseInput;
};


export type MutationUpdatePhoneNumberForUserArgs = {
  phoneNumber: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationUpdatePinnedStateForDiscussionMessageArgs = {
  isPinned: Scalars['Boolean'];
  messageId: Scalars['ID'];
};


export type MutationUpdatePlatformVarArgs = {
  platformVar: UpdatePlatformVarInput;
};


export type MutationUpdatePrimaryEmailForUserArgs = {
  primaryEmail: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationUpdateProgramArgs = {
  id: Scalars['ID'];
  program: ProgramInput;
};


export type MutationUpdateProgramLicenceArgs = {
  programLicenceId: Scalars['ID'];
  programLicenceInput: UpdateProgramLicenceInput;
};


export type MutationUpdateProgramMaintainerArgs = {
  programMaintainer: ProgramMaintainerInput;
  programMaintainerId: Scalars['ID'];
};


export type MutationUpdateProgramWeekArgs = {
  program: Scalars['ID'];
  programWeek: ProgramWeekInput;
  programWeekId: Scalars['ID'];
};


export type MutationUpdateQuizArgs = {
  id: Scalars['ID'];
  quiz: QuizInput;
};


export type MutationUpdateQuizAssessmentArgs = {
  id: Scalars['ID'];
  quiz: QuizAssessmentUpdateInput;
};


export type MutationUpdateQuizAssessmentAspectArgs = {
  aspect: QuizAssessmentAspectInput;
  aspectId: Scalars['ID'];
  quiz: Scalars['ID'];
};


export type MutationUpdateQuizAssessmentQuestionArgs = {
  question: QuizAssessmentQuestionInput;
  questionId: Scalars['ID'];
  quiz: Scalars['ID'];
};


export type MutationUpdateQuizQuestionArgs = {
  quiz: Scalars['ID'];
  quizQuestion: QuizQuestionInput;
  quizQuestionId: Scalars['ID'];
};


export type MutationUpdateRoleForUsersArgs = {
  byEmails: Array<Scalars['String']>;
  role: UserRole;
};


export type MutationUpdateScaleCaptionArgs = {
  scaleCaption: ScaleCaptionInput;
  scaleCaptionId: Scalars['ID'];
};


export type MutationUpdateSecondaryEmailForUserArgs = {
  secondaryEmail: Scalars['String'];
  userId: Scalars['ID'];
};


export type MutationUpdateSectionArgs = {
  moduleId: Scalars['ID'];
  section: UpdateSectionInput;
  sectionId: Scalars['ID'];
};


export type MutationUpdateSectionInAssessmentArgs = {
  assessmentId: Scalars['ID'];
  assessmentSection: AssessmentSectionInput;
  assessmentSectionId: Scalars['ID'];
};


export type MutationUpdateSectionOrderArgs = {
  moduleId: Scalars['ID'];
  order: Scalars['Long'];
  sectionId: Scalars['ID'];
};


export type MutationUpdateSoftSkillArgs = {
  id: Scalars['ID'];
  skill: SkillInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  user: UpdateUserInput;
};


export type MutationUpdateUserRoleArgs = {
  role: UserRole;
  userId: Scalars['ID'];
};


export type MutationUpdateVideoLessonArgs = {
  id: Scalars['ID'];
  videoLesson: VideoLessonInput;
};


export type MutationUpdateVideoOverlayArgs = {
  videoLessonId: Scalars['ID'];
  videoOverlay: VideoOverlayInput;
  videoOverlayId: Scalars['ID'];
};


export type MutationUpdateVideoSubtitleArgs = {
  videoLessonId: Scalars['ID'];
  videoSubtitle: VideoSubtitleInput;
  videoSubtitleId: Scalars['ID'];
};


export type MutationUpsertRegionArgs = {
  region: RegionInput;
};


export type MutationUpvoteDiscussionMessageArgs = {
  messageId: Scalars['ID'];
};


export type MutationUseTourArgs = {
  tourName: PlatformTour;
};

export type NewComerLearnerStats = {
  __typename?: 'NewComerLearnerStats';
  discussionsExcangedThisWeek: Array<User>;
  totalCompletedProfile: Scalars['Int'];
  totalEnrolled: Scalars['Int'];
  totalRegistrations: Scalars['Int'];
  usersCompletedProfile: Array<User>;
  usersEngagedConversationsThisWeek: Array<User>;
  usersEnrolled: Array<User>;
  usersRegistred: Array<User>;
};

export type NotificationRedirect = {
  __typename?: 'NotificationRedirect';
  id: Scalars['ID'];
  redirectEmail: Scalars['String'];
  user: User;
};

export type NotificationRedirectInput = {
  currentEmail: Scalars['String'];
  redirectEmail: Scalars['String'];
};

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  email: Array<NotificationsGroup>;
  push: Array<NotificationsGroup>;
  sms: Array<NotificationsGroup>;
  whatsApp: Array<NotificationsGroup>;
};

/** Notification Topic */
export enum NotificationTopic {
  AssignmentSubmissionReminder = 'AssignmentSubmissionReminder',
  CompleteProfileReminder = 'CompleteProfileReminder',
  CompleteYourPeerReview = 'CompleteYourPeerReview',
  JoinYourGroupReminder = 'JoinYourGroupReminder',
  NewEvent = 'NewEvent',
  NewGroupNotification = 'NewGroupNotification',
  NewMessage = 'NewMessage',
  NewMessageReply = 'NewMessageReply',
  NewPostInGroup = 'NewPostInGroup',
  NewReplyToComment = 'NewReplyToComment',
  NewReplyToPostInGroup = 'NewReplyToPostInGroup',
  NewTask = 'NewTask',
  TaskReminder = 'TaskReminder',
  ThreeDaysBeforeAssignmentDueDate = 'ThreeDaysBeforeAssignmentDueDate',
  ToAskLearnerAgainToBeMoreActive = 'ToAskLearnerAgainToBeMoreActive',
  ToAskLearnerToBeMoreActive = 'ToAskLearnerToBeMoreActive',
  ToAskLearnerToFinalizeWeek = 'ToAskLearnerToFinalizeWeek',
  ToAskLearnerToStartProgram = 'ToAskLearnerToStartProgram',
  ToAttachSecondaryEmail = 'ToAttachSecondaryEmail',
  ToFinishRegistration = 'ToFinishRegistration',
  ToInformAboutUnreadPlatformNotifications = 'ToInformAboutUnreadPlatformNotifications',
  ToInformProgramStarted5qs = 'ToInformProgramStarted5qs',
  ToInformProgramStartedOman = 'ToInformProgramStartedOman',
  ToInviteToProgram = 'ToInviteToProgram',
  ToRequestPrimaryEmailConfirmation = 'ToRequestPrimaryEmailConfirmation',
  ToResetPassword = 'ToResetPassword',
  ToSendHelpRequest = 'ToSendHelpRequest',
  ToSendProgramInstructions5qs = 'ToSendProgramInstructions5qs',
  ToSendProgramInstructionsCommon = 'ToSendProgramInstructionsCommon',
  ToSendProgramInstructionsOman = 'ToSendProgramInstructionsOman',
  ToSendWeek1Instruction = 'ToSendWeek1Instruction',
  ToSendWeek2Instruction = 'ToSendWeek2Instruction',
  ToSendWeek3Instruction = 'ToSendWeek3Instruction',
  ToSendWeek4Instruction = 'ToSendWeek4Instruction',
  ToSendWeeklySummary = 'ToSendWeeklySummary',
  ToSubstituteEmail = 'ToSubstituteEmail',
  WeekCompleted = 'WeekCompleted',
  WithinReachOfCompletingWeek = 'WithinReachOfCompletingWeek'
}

/** Group of notifications */
export enum NotificationsGroup {
  Groups = 'Groups',
  LearningProcess = 'LearningProcess',
  MarketingCommunications = 'MarketingCommunications'
}

export type OnlineMembersInGroup = {
  __typename?: 'OnlineMembersInGroup';
  groupId: Scalars['ID'];
  onlineMembersIds: Array<Scalars['ID']>;
};

/** OrderBy direction */
export enum OrderByDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type OrderByInput = {
  direction: OrderByDirection;
  property: Scalars['String'];
};

export type PasswordSubstitutionInput = {
  currentPassword: Scalars['String'];
  substitutionPassword: Scalars['String'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  cardCvc: Scalars['String'];
  cardNumber: Scalars['String'];
  cardValidTill: Scalars['Date'];
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  method: PaymentMethod;
  program: Program;
  user: User;
};

export type PaymentInput = {
  amount: Scalars['Float'];
  cardCvc: Scalars['String'];
  cardNumber: Scalars['String'];
  cardValidTill: Scalars['Date'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  program: Scalars['ID'];
};

export enum PaymentMethod {
  Card = 'card'
}

export type Phase = {
  __typename?: 'Phase';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type PhaseInput = {
  title: TranslationsInput;
};

export type Platform = {
  __typename?: 'Platform';
  defaultLanguage: SupportedLanguage;
  source: Scalars['String'];
  subdomain: Scalars['String'];
  theme?: Maybe<PlatformTheme>;
};

export type PlatformFeedback = {
  __typename?: 'PlatformFeedback';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  message: Scalars['String'];
  type: PlatformFeedbackType;
  updatedAt: Scalars['Date'];
  user: User;
};

export type PlatformFeedbackInput = {
  message: Scalars['String'];
  type: PlatformFeedbackType;
};

export enum PlatformFeedbackType {
  Bug = 'Bug',
  Idea = 'Idea',
  Like = 'Like'
}

export type PlatformInput = {
  defaultLanguage: SupportedLanguage;
  subdomain: Scalars['String'];
};

export type PlatformNotification = {
  __typename?: 'PlatformNotification';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isRead: Scalars['Boolean'];
  isViewed: Scalars['Boolean'];
  message: Scalars['String'];
  subject: Scalars['String'];
  topic: NotificationTopic;
  trail?: Maybe<PlatformNotificationTrailUnion>;
  updatedAt: Scalars['Date'];
  user: User;
};

export type PlatformNotificationTrailUnion = DiscussionMessage;

export type PlatformTheme = {
  __typename?: 'PlatformTheme';
  favicon?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  primaryColor?: Maybe<Scalars['String']>;
  secondaryColor?: Maybe<Scalars['String']>;
};

export type PlatformThemeInput = {
  primaryColor: Scalars['String'];
  secondaryColor: Scalars['String'];
};

export enum PlatformTour {
  Classroom = 'Classroom',
  Dashboard = 'Dashboard',
  Modules = 'Modules',
  Program = 'Program',
  Weeks = 'Weeks'
}

export type PlatformVar = {
  __typename?: 'PlatformVar';
  canBeUpdatedByMe: Scalars['Boolean'];
  forRoles: Array<UserRole>;
  name: Scalars['String'];
  value: Scalars['JsonString'];
};

export type PrimaryEmailOptsInput = {
  alternativeEmail: Scalars['String'];
};

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<ImageSizes>;
  country?: Maybe<Country>;
  currentEmployment?: Maybe<EmploymentEntry>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  education?: Maybe<Array<EducationEntry>>;
  email?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['String']>;
  employment?: Maybe<Array<EmploymentEntry>>;
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  gender?: Maybe<Gender>;
  hardSkills: Array<Skill>;
  isUnemployed: Scalars['Boolean'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Country>;
  otherSkills: Array<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  region?: Maybe<Region>;
  secondaryEmail?: Maybe<Scalars['String']>;
  softSkills: Array<Skill>;
  whatsAppNumber?: Maybe<Scalars['String']>;
};

export type Program = {
  __typename?: 'Program';
  availableRewards: Array<EffortReward>;
  availableRewardsSize: Scalars['Int'];
  category?: Maybe<Category>;
  createdAt: Scalars['Date'];
  createdBy: User;
  description?: Maybe<Scalars['String']>;
  duration: Scalars['Long'];
  earnedRewardsSize: Scalars['Int'];
  groups: Array<Group>;
  id: Scalars['ID'];
  introVideoThumb?: Maybe<ImageSizes>;
  isAutomaticGroupingEnabled: Scalars['Boolean'];
  isStarted: Scalars['Boolean'];
  labels?: Maybe<Array<ProgramLabel>>;
  learners: Array<User>;
  level?: Maybe<ProgramLevel>;
  licenceRequirement?: Maybe<ProgramLicenceRequirement>;
  lifecycleStage: ProgramLifecycleStage;
  maintainers?: Maybe<Array<ProgramMaintainer>>;
  managers?: Maybe<Array<User>>;
  metrics: ProgramMaterialMetrics;
  onlineOnly: Scalars['Boolean'];
  poster?: Maybe<ImageSizes>;
  shortDescription?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  startsAt?: Maybe<Scalars['Date']>;
  syllabus?: Maybe<AttachmentRecord>;
  title: Scalars['String'];
  totalArticleLessons: Scalars['Int'];
  totalAssessments: Scalars['Int'];
  totalAssignments: Scalars['Int'];
  totalGroups: Scalars['Int'];
  totalQuizzes: Scalars['Int'];
  totalSubjectDiscussions: Scalars['Int'];
  totalVideoLessons: Scalars['Int'];
  type: ProgramType;
  updatedAt: Scalars['Date'];
  videoUrl?: Maybe<Scalars['String']>;
  weeks?: Maybe<Array<ProgramWeek>>;
  willStartAfterMs: Scalars['Long'];
};


export type ProgramWeeksArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type ProgramActivity = {
  __typename?: 'ProgramActivity';
  programId: Scalars['ID'];
  totalCompleted: Scalars['Int'];
  totalEngaged: Scalars['Int'];
  totalLearnersWithProgressInRange: Scalars['Int'];
  weeks: Array<ProgramWeekActivity>;
};


export type ProgramActivityTotalLearnersWithProgressInRangeArgs = {
  progressMax: Scalars['Int'];
  progressMin: Scalars['Int'];
};

export type ProgramInput = {
  category: Scalars['ID'];
  description?: Maybe<TranslationsInput>;
  duration: Scalars['Long'];
  level: ProgramLevel;
  licenceRequirement?: Maybe<ProgramLicenceRequirementInput>;
  shortDescription?: Maybe<TranslationsInput>;
  source: UserSource;
  startsAt?: Maybe<Scalars['Date']>;
  syllabusUrl?: Maybe<Scalars['String']>;
  title: TranslationsInput;
  type: ProgramType;
  videoUrl?: Maybe<Scalars['String']>;
};

export type ProgramInvitation = {
  __typename?: 'ProgramInvitation';
  invitationPassword: Scalars['String'];
  invitationProfile: InvitationProfile;
  isSent: Scalars['Boolean'];
  isUsed: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type ProgramInvitationPokeResult = {
  __typename?: 'ProgramInvitationPokeResult';
  alreadyInvited: Array<Scalars['String']>;
  canBeInvited: Array<Scalars['String']>;
  isOk: Scalars['Boolean'];
  totalAlreadyInvited: Scalars['Int'];
  totalCanBeInvited: Scalars['Int'];
  totalProblems: Scalars['Int'];
  totalWithAccounts: Scalars['Int'];
  withAccounts: Array<Scalars['String']>;
};

export type ProgramInvitationsStats = {
  __typename?: 'ProgramInvitationsStats';
  notSent: Array<ProgramInvitation>;
  notUsed: Array<ProgramInvitation>;
  totalInvitations: Scalars['Int'];
  totalNotSent: Scalars['Int'];
  totalNotUsed: Scalars['Int'];
  totalSent: Scalars['Int'];
  totalUsed: Scalars['Int'];
  used: Array<ProgramInvitation>;
};


export type ProgramInvitationsStatsNotSentArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type ProgramInvitationsStatsNotUsedArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type ProgramInvitationsStatsUsedArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};

export type ProgramLabel = {
  __typename?: 'ProgramLabel';
  createdAt: Scalars['Date'];
  icon: GalleryImage;
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ProgramLabelInput = {
  icon: Scalars['ID'];
  title: TranslationsInput;
};

export enum ProgramLevel {
  Advance = 'Advance',
  Beginner = 'Beginner',
  Intermediate = 'Intermediate'
}

export type ProgramLicence = {
  __typename?: 'ProgramLicence';
  id: Scalars['ID'];
  limit: Scalars['Int'];
  value: Scalars['String'];
};

export type ProgramLicenceInput = {
  limit: Scalars['Int'];
  value: Scalars['String'];
};

export type ProgramLicenceRequirement = {
  __typename?: 'ProgramLicenceRequirement';
  isRequired: Scalars['Boolean'];
  licences: Array<ProgramLicence>;
};

export type ProgramLicenceRequirementInput = {
  isRequired: Scalars['Boolean'];
  licences: Array<Scalars['ID']>;
};

export enum ProgramLifecycleStage {
  AvailableForPreview = 'AvailableForPreview',
  EnrollmentClosed = 'EnrollmentClosed',
  EnrollmentOpened = 'EnrollmentOpened',
  InDraft = 'InDraft',
  Terminated = 'Terminated'
}

export type ProgramMaintainer = {
  __typename?: 'ProgramMaintainer';
  bio: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  occupation: Scalars['String'];
  updatedAt: Scalars['Date'];
  user: User;
};

export type ProgramMaintainerInput = {
  bio: TranslationsInput;
  occupation: TranslationsInput;
  user: Scalars['ID'];
};

export type ProgramMaterialIndex = {
  __typename?: 'ProgramMaterialIndex';
  isFirstModule?: Maybe<Scalars['Boolean']>;
  isFirstWeek?: Maybe<Scalars['Boolean']>;
  isLastModule?: Maybe<Scalars['Boolean']>;
  isLastWeek?: Maybe<Scalars['Boolean']>;
  moduleId?: Maybe<Scalars['ID']>;
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
};

export type ProgramMaterialMetrics = {
  __typename?: 'ProgramMaterialMetrics';
  forModules: Array<ProgramModuleMetrics>;
  forProgram: ProgramMetrics;
  forSections: Array<ModuleSectionMetrics>;
  forWeeks: Array<ProgramWeekMetrics>;
};

export type ProgramMetrics = {
  __typename?: 'ProgramMetrics';
  averageCohortProgress: Scalars['Float'];
  programId: Scalars['ID'];
  progress: Scalars['Float'];
};

export type ProgramModuleActivity = {
  __typename?: 'ProgramModuleActivity';
  moduleId: Scalars['ID'];
  totalCompleted: Scalars['Int'];
  totalEngaged: Scalars['Int'];
  totalLearnersWithProgressInRange: Scalars['Int'];
  weekId: Scalars['ID'];
};


export type ProgramModuleActivityTotalLearnersWithProgressInRangeArgs = {
  progressMax: Scalars['Int'];
  progressMin: Scalars['Int'];
};

export type ProgramModuleMaterialMetrics = {
  __typename?: 'ProgramModuleMaterialMetrics';
  forModule: ProgramModuleMetrics;
  forSections: Array<ModuleSectionMetrics>;
};

export type ProgramModuleMetrics = {
  __typename?: 'ProgramModuleMetrics';
  averageCohortProgress: Scalars['Float'];
  isVisited: Scalars['Boolean'];
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  progress: Scalars['Float'];
  weekId: Scalars['ID'];
};

export type ProgramRewardStats = {
  __typename?: 'ProgramRewardStats';
  program: Program;
  weeksRewardStats: Array<WeekRewardStats>;
};

export enum ProgramType {
  Foundation = 'Foundation',
  Intermediate = 'Intermediate',
  Specialization = 'Specialization'
}

export type ProgramWeek = {
  __typename?: 'ProgramWeek';
  availableAssignments: Array<ModuleAssignment>;
  availableQuizzes: Array<Quiz>;
  availableRewardsSize?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  duration: Scalars['Long'];
  earnedRewardsSize?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  modules?: Maybe<Array<Module>>;
  order: Scalars['Long'];
  phase: Phase;
  title: Scalars['String'];
  totalArticleLessons: Scalars['Int'];
  totalAssessments: Scalars['Int'];
  totalAssignments: Scalars['Int'];
  totalQuizzes: Scalars['Int'];
  totalQuizzesAndAssessments: Scalars['Int'];
  totalSubjectDiscussions: Scalars['Int'];
  totalSubmittedAssignments: Scalars['Int'];
  totalSubmittedQuizzes: Scalars['Int'];
  totalVideoLessons: Scalars['Int'];
  updatedAt: Scalars['Date'];
};

export type ProgramWeekActivity = {
  __typename?: 'ProgramWeekActivity';
  modules: Array<ProgramModuleActivity>;
  totalCompleted: Scalars['Int'];
  totalEngaged: Scalars['Int'];
  totalLearnersWithProgressInRange: Scalars['Int'];
  users: Array<User>;
  usersCompleted: Array<User>;
  week: ProgramWeek;
  weekId: Scalars['ID'];
};


export type ProgramWeekActivityTotalLearnersWithProgressInRangeArgs = {
  progressMax: Scalars['Int'];
  progressMin: Scalars['Int'];
};

export type ProgramWeekInput = {
  description: TranslationsInput;
  duration: Scalars['Long'];
  order: Scalars['Long'];
  phase: Scalars['ID'];
  title: TranslationsInput;
};

export type ProgramWeekMaterialMetrics = {
  __typename?: 'ProgramWeekMaterialMetrics';
  forModules: Array<ProgramModuleMetrics>;
  forSections: Array<ModuleSectionMetrics>;
  forWeek: ProgramWeekMetrics;
};

export type ProgramWeekMetrics = {
  __typename?: 'ProgramWeekMetrics';
  averageCohortProgress: Scalars['Float'];
  isVisited: Scalars['Boolean'];
  programId: Scalars['ID'];
  progress: Scalars['Float'];
  totalActiveMembersInDiscussions: Scalars['Int'];
  totalCommentsInDiscussions: Scalars['Int'];
  week: ProgramWeek;
  weekId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  analyticsReport: AnalyticsReport;
  calcAverageModuleCohortProgress: Scalars['Int'];
  calcAverageProgramCohortProgress: Scalars['Int'];
  calcAverageWeekCohortProgress: Scalars['Int'];
  calcCompletionEstimationForProgram: Scalars['Long'];
  calcCompletionEstimationForProgramModule: Scalars['Long'];
  calcCompletionEstimationForProgramWeek: Scalars['Long'];
  calcProgramModuleProgress: Scalars['Int'];
  calcProgramModuleSectionProgress: Scalars['Int'];
  calcProgramProgress: Scalars['Int'];
  calcProgramWeekProgress: Scalars['Int'];
  countChatChannels: Scalars['Int'];
  countChatContacts: Scalars['Int'];
  countChatMessagesInChannel: Scalars['Int'];
  /** Counts only root messages if filterBy is not applied */
  countDiscussionMessages: Scalars['Int'];
  countLearnersInCohort: Scalars['Int'];
  countMyManagedGroups: Scalars['Int'];
  countMyMentoredGroups: Scalars['Int'];
  countMyPeerReviewsForAssignment: Scalars['Int'];
  countNotifications: Scalars['Float'];
  countProgramDiscussions: Scalars['Int'];
  countProgramGroupProjects: Scalars['Int'];
  countTestUsers: Scalars['Int'];
  countTotalUnreadChatMessages: Scalars['Int'];
  fetchArticleLesson: ArticleLesson;
  fetchAssessment: Assessment;
  fetchAssessmentSubmission: AssessmentSubmission;
  fetchAssessmentSubmissions: Array<AssessmentSubmission>;
  fetchAssessments: Array<Assessment>;
  fetchAssignmentsByModule: Array<ModuleAssignment>;
  fetchCategory: Category;
  fetchChatChannel: ChatChannel;
  fetchChatChannels: Array<ChatChannel>;
  fetchChatContact: ChatContact;
  fetchChatContacts: Array<ChatContact>;
  fetchChatMessages: Array<ChatMessage>;
  fetchClassroomResourses: ClassroomResources;
  fetchCommitmentLesson: CommitmentLesson;
  fetchCountries: Array<Country>;
  fetchCountry: Country;
  fetchCurrentUser: User;
  fetchDiscussion: Discussion;
  fetchDiscussionMessage: DiscussionMessage;
  /** Returns only root messages if filterBy is not applied */
  fetchDiscussionMessages: Array<DiscussionMessage>;
  fetchDiscussionsFromTutoredGroups: Array<Discussion>;
  fetchGalleryFolder: GalleryFolder;
  fetchGalleryFolders: Array<GalleryFolder>;
  fetchGroup: Array<Group>;
  fetchGroupingSetupForProgram: GroupingSetup;
  fetchGroupingSetups: Array<GroupingSetup>;
  fetchGroups: Array<Group>;
  fetchHardSkill: Skill;
  fetchHardSkills: Array<Skill>;
  fetchImagesFromGallery: Array<GalleryImage>;
  fetchInVideoQuiz: InVideoQuiz;
  fetchLastAttemptForAllSectionQuizzesForCurrentUser: Array<QuizLastAttempt>;
  fetchLastQuizAssessmentAttemptForCurrentUser?: Maybe<QuizAssessmentAttempt>;
  fetchLastQuizAttemptForCurrentUser?: Maybe<QuizAttempt>;
  fetchLearnersOfProgram: Array<User>;
  fetchManyArticleLessons: Array<ArticleLesson>;
  fetchManyAssessmentQuotientChoiceConclusions: Array<AssessmentQuotientChoiceConclusion>;
  fetchManyAssessmentQuotients: Array<AssessmentQuotient>;
  fetchManyCategories: Array<Category>;
  fetchManyCommitmentLessons: Array<CommitmentLesson>;
  fetchManyGroupProjects: Array<GroupProject>;
  fetchManyInVideoQuizzes: Array<InVideoQuiz>;
  fetchManyLanguages: Array<Language>;
  fetchManyModuleAssignmentSubmissions: Array<AssignmentSubmission>;
  fetchManyModules: Array<Module>;
  fetchManyPhases: Array<Phase>;
  fetchManyPlatformFeedbacks: Array<PlatformFeedback>;
  fetchManyProgramMaintainers: Array<ProgramMaintainer>;
  fetchManyQuizAssessments: Array<QuizAssessment>;
  fetchManyQuizzes: Array<Quiz>;
  fetchManyScaleCaptions: Array<ScaleCaption>;
  fetchManyVideoLessons: Array<VideoLesson>;
  fetchMinistries: Array<Ministry>;
  fetchMinistry: Ministry;
  fetchModule: Module;
  fetchModuleAssignment: ModuleAssignment;
  fetchModuleAssignmentSubmission: Array<AssignmentSubmission>;
  fetchModuleAssignmentSubmissionOfOneLearner: AssignmentSubmission;
  fetchModuleAssignmentSubmissionsForPeerReview: Array<AssignmentSubmission>;
  fetchModuleAssignments: Array<ModuleAssignment>;
  fetchModuleSection: Section;
  fetchMyAssessmentSubmission?: Maybe<AssessmentSubmission>;
  fetchMyGroups: Array<Group>;
  fetchMyManagedGroup: Group;
  fetchMyManagedGroups: Array<Group>;
  fetchMyManagedPrograms: Array<Program>;
  fetchMyMentoredGroup: Group;
  fetchMyMentoredGroups: Array<Group>;
  fetchMyMentoredPrograms: Array<Program>;
  fetchMyModuleAssignmentSubmission: AssignmentSubmission;
  fetchMyModuleSatisfactionFeedback: SatisfactionFeedback;
  fetchMyPlatform: Platform;
  fetchMyProgram: Program;
  fetchMyProgramGroup: Group;
  fetchMyProgramRewardsStats: ProgramRewardStats;
  fetchMyPrograms: Array<Program>;
  fetchMyProteges: Array<User>;
  fetchNextModule?: Maybe<Module>;
  fetchNextWeek?: Maybe<ProgramWeek>;
  fetchNotificationRedirects: Array<NotificationRedirect>;
  fetchOneAssessmentQuotient: AssessmentQuotient;
  fetchOneAssessmentQuotientChoiceConclusion: AssessmentQuotientChoiceConclusion;
  fetchOneGroupProject: GroupProject;
  fetchOneLanguage: Language;
  fetchOneModuleAssignmentSubmission: AssignmentSubmission;
  fetchOneProgramMaintainer: ProgramMaintainer;
  fetchOneScaleCaption: ScaleCaption;
  fetchPendingGroupProjects: Array<GroupProject>;
  fetchPhase: Phase;
  fetchPlatformFeedback: PlatformFeedback;
  fetchPlatformVars: Array<PlatformVar>;
  fetchProgramCohort: Array<User>;
  fetchProgramInvitationStats: ProgramInvitationsStats;
  fetchProgramLicence: ProgramLicence;
  fetchProgramLicences: Array<ProgramLicence>;
  fetchProgramModule: Module;
  fetchProgramsByAdminSource: Array<Program>;
  fetchProgramsBySource: Array<Program>;
  fetchProgramsCreatedByCurrentUser: Array<Program>;
  fetchPublicProgram: Program;
  fetchPublicPrograms: Array<Program>;
  fetchQuiz: Quiz;
  fetchQuizAssessment: QuizAssessment;
  fetchQuizAssessmentAttempt: QuizAssessmentAttempt;
  fetchQuizAttempt: QuizAttempt;
  fetchRegions: Array<Region>;
  fetchSatisfactionFeedbacks: Array<SatisfactionFeedback>;
  fetchSessionByToken: Session;
  fetchSoftSkill: Skill;
  fetchSoftSkills: Array<Skill>;
  fetchTestUsers: Array<User>;
  fetchTutorsOfProgram: Array<User>;
  fetchUser: User;
  fetchUsers: Array<User>;
  fetchUsersByEmails: FindUsersResult;
  fetchVideoLesson: VideoLesson;
  fetchVisitedSectionIdsForModule: Array<Scalars['String']>;
  getMyProgramMetrics: ProgramMaterialMetrics;
  getMyProgramModuleMetrics: ProgramModuleMaterialMetrics;
  getMyProgramWeekMetrics: ProgramWeekMaterialMetrics;
  getMyProgramWeekModulesMetrics: Array<ProgramModuleMaterialMetrics>;
  getMyProgramsMetrics: Array<ProgramMaterialMetrics>;
  inspectIntegrityOfUsers: Array<User>;
  pokeCleanupForUsers: Array<User>;
  provideChatChannelClue: Scalars['String'];
  searchUsersBySymbols: SearchUsersBySymbols;
  searchUsersInCohort: Array<User>;
  simpleProgramsSearch: Array<Program>;
  simpleUsersSearch: Array<User>;
  subDomainExists: Scalars['Boolean'];
};


export type QueryAnalyticsReportArgs = {
  analyticsReportInput?: Maybe<AnalyticsReportInput>;
};


export type QueryCalcAverageModuleCohortProgressArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type QueryCalcAverageProgramCohortProgressArgs = {
  programId: Scalars['ID'];
};


export type QueryCalcAverageWeekCohortProgressArgs = {
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type QueryCalcCompletionEstimationForProgramArgs = {
  programId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
};


export type QueryCalcCompletionEstimationForProgramModuleArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
  weekId: Scalars['ID'];
};


export type QueryCalcCompletionEstimationForProgramWeekArgs = {
  programId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
  weekId: Scalars['ID'];
};


export type QueryCalcProgramModuleProgressArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
  weekId: Scalars['ID'];
};


export type QueryCalcProgramModuleSectionProgressArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  sectionId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
  weekId: Scalars['ID'];
};


export type QueryCalcProgramProgressArgs = {
  programId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
};


export type QueryCalcProgramWeekProgressArgs = {
  programId: Scalars['ID'];
  userId?: Maybe<Scalars['ID']>;
  weekId: Scalars['ID'];
};


export type QueryCountChatChannelsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryCountChatContactsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryCountChatMessagesInChannelArgs = {
  channelId: Scalars['ID'];
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryCountDiscussionMessagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  discussionId: Scalars['ID'];
  filterBy?: Maybe<DiscussionMessageFilterByInput>;
};


export type QueryCountLearnersInCohortArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryCountMyManagedGroupsArgs = {
  programId: Scalars['ID'];
};


export type QueryCountMyMentoredGroupsArgs = {
  programId: Scalars['ID'];
};


export type QueryCountMyPeerReviewsForAssignmentArgs = {
  assignment: Scalars['ID'];
  program: Scalars['ID'];
};


export type QueryCountNotificationsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  dateRange?: Maybe<DateRangeInput>;
};


export type QueryCountProgramDiscussionsArgs = {
  programId: Scalars['ID'];
};


export type QueryCountProgramGroupProjectsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchArticleLessonArgs = {
  id: Scalars['ID'];
};


export type QueryFetchAssessmentArgs = {
  assessmentId: Scalars['ID'];
};


export type QueryFetchAssessmentSubmissionArgs = {
  assessmentSubmissionId: Scalars['ID'];
};


export type QueryFetchAssessmentSubmissionsArgs = {
  assessmentId: Scalars['ID'];
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchAssessmentsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchAssignmentsByModuleArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryFetchChatChannelArgs = {
  chatChannelId: Scalars['ID'];
};


export type QueryFetchChatChannelsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchChatContactArgs = {
  chatContactId: Scalars['ID'];
};


export type QueryFetchChatContactsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchChatMessagesArgs = {
  channelId: Scalars['ID'];
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchClassroomResoursesArgs = {
  moduleId: Scalars['ID'];
};


export type QueryFetchCommitmentLessonArgs = {
  id: Scalars['ID'];
};


export type QueryFetchCountriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchCountryArgs = {
  id: Scalars['ID'];
};


export type QueryFetchDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type QueryFetchDiscussionMessageArgs = {
  messageId: Scalars['ID'];
};


export type QueryFetchDiscussionMessagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  discussionId: Scalars['ID'];
  filterBy?: Maybe<DiscussionMessageFilterByInput>;
  orderDirection?: Maybe<OrderByDirection>;
};


export type QueryFetchGalleryFolderArgs = {
  id: Scalars['ID'];
};


export type QueryFetchGalleryFoldersArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchGroupArgs = {
  id: Scalars['ID'];
};


export type QueryFetchGroupingSetupForProgramArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchGroupingSetupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchHardSkillArgs = {
  id: Scalars['ID'];
};


export type QueryFetchHardSkillsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchImagesFromGalleryArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchInVideoQuizArgs = {
  id: Scalars['ID'];
};


export type QueryFetchLastAttemptForAllSectionQuizzesForCurrentUserArgs = {
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchLastQuizAssessmentAttemptForCurrentUserArgs = {
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
  quizAssessmentId: Scalars['ID'];
};


export type QueryFetchLastQuizAttemptForCurrentUserArgs = {
  moduleSectiondId: Scalars['ID'];
  programId: Scalars['ID'];
  quizId: Scalars['ID'];
};


export type QueryFetchLearnersOfProgramArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchManyArticleLessonsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyAssessmentQuotientChoiceConclusionsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyAssessmentQuotientsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyCategoriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyCommitmentLessonsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyGroupProjectsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyInVideoQuizzesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyLanguagesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyModuleAssignmentSubmissionsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchManyModulesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyPhasesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyPlatformFeedbacksArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyProgramMaintainersArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyQuizAssessmentsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyQuizzesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyScaleCaptionsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchManyVideoLessonsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMinistriesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMinistryArgs = {
  id: Scalars['ID'];
};


export type QueryFetchModuleArgs = {
  id: Scalars['ID'];
};


export type QueryFetchModuleAssignmentArgs = {
  id: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchModuleAssignmentSubmissionArgs = {
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchModuleAssignmentSubmissionOfOneLearnerArgs = {
  learnerId: Scalars['ID'];
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchModuleAssignmentSubmissionsForPeerReviewArgs = {
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchModuleAssignmentsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchModuleSectionArgs = {
  moduleSectionId: Scalars['ID'];
  programId: Scalars['ID'];
  programModuleId: Scalars['ID'];
};


export type QueryFetchMyAssessmentSubmissionArgs = {
  assessmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchMyGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyManagedGroupArgs = {
  groupId: Scalars['ID'];
};


export type QueryFetchMyManagedGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchMyManagedProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyMentoredGroupArgs = {
  groupId: Scalars['ID'];
};


export type QueryFetchMyMentoredGroupsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchMyMentoredProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyModuleAssignmentSubmissionArgs = {
  moduleAssignmentId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchMyModuleSatisfactionFeedbackArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchMyPlatformArgs = {
  subdomain: Scalars['String'];
};


export type QueryFetchMyProgramArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyProgramGroupArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyProgramRewardsStatsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchMyProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchMyProtegesArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchNextModuleArgs = {
  currentModuleId: Scalars['ID'];
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type QueryFetchNextWeekArgs = {
  currentWeekId: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchOneAssessmentQuotientArgs = {
  assessmentQuotientId: Scalars['ID'];
};


export type QueryFetchOneAssessmentQuotientChoiceConclusionArgs = {
  assessmentQuotientChoiceConclusionId: Scalars['ID'];
};


export type QueryFetchOneGroupProjectArgs = {
  groupProjectId: Scalars['ID'];
};


export type QueryFetchOneLanguageArgs = {
  id: Scalars['ID'];
};


export type QueryFetchOneModuleAssignmentSubmissionArgs = {
  id: Scalars['ID'];
  programId: Scalars['ID'];
};


export type QueryFetchOneProgramMaintainerArgs = {
  programMaintainerId: Scalars['ID'];
};


export type QueryFetchOneScaleCaptionArgs = {
  scaleCaptionId: Scalars['ID'];
};


export type QueryFetchPendingGroupProjectsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchPhaseArgs = {
  id: Scalars['ID'];
};


export type QueryFetchPlatformFeedbackArgs = {
  platformFeedbackId: Scalars['ID'];
};


export type QueryFetchProgramCohortArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchProgramInvitationStatsArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchProgramLicenceArgs = {
  programLicenceId: Scalars['ID'];
};


export type QueryFetchProgramLicencesArgs = {
  clientFilter: ClientFilterInput;
};


export type QueryFetchProgramModuleArgs = {
  programId: Scalars['ID'];
  programModuleId: Scalars['ID'];
  programWeekId: Scalars['ID'];
};


export type QueryFetchProgramsByAdminSourceArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchProgramsBySourceArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  source: Scalars['String'];
};


export type QueryFetchProgramsCreatedByCurrentUserArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchPublicProgramArgs = {
  programId: Scalars['ID'];
};


export type QueryFetchPublicProgramsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchQuizArgs = {
  id: Scalars['ID'];
};


export type QueryFetchQuizAssessmentArgs = {
  id: Scalars['ID'];
};


export type QueryFetchQuizAssessmentAttemptArgs = {
  id: Scalars['ID'];
};


export type QueryFetchQuizAttemptArgs = {
  id: Scalars['ID'];
};


export type QueryFetchRegionsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchSatisfactionFeedbacksArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchSessionByTokenArgs = {
  token: Scalars['String'];
};


export type QueryFetchSoftSkillArgs = {
  id: Scalars['ID'];
};


export type QueryFetchSoftSkillsArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
};


export type QueryFetchTutorsOfProgramArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId: Scalars['ID'];
};


export type QueryFetchUserArgs = {
  id: Scalars['ID'];
};


export type QueryFetchUsersArgs = {
  clientFilter?: Maybe<ClientFilterInput>;
  programId?: Maybe<Scalars['ID']>;
  role?: Maybe<UserRole>;
};


export type QueryFetchUsersByEmailsArgs = {
  emails: Array<Scalars['String']>;
};


export type QueryFetchVideoLessonArgs = {
  id: Scalars['ID'];
};


export type QueryFetchVisitedSectionIdsForModuleArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type QueryGetMyProgramMetricsArgs = {
  programId: Scalars['ID'];
};


export type QueryGetMyProgramModuleMetricsArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type QueryGetMyProgramWeekMetricsArgs = {
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type QueryGetMyProgramWeekModulesMetricsArgs = {
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};


export type QueryInspectIntegrityOfUsersArgs = {
  source: UserSource;
};


export type QueryPokeCleanupForUsersArgs = {
  emails: Array<Scalars['String']>;
};


export type QueryProvideChatChannelClueArgs = {
  membersIds: Array<Scalars['ID']>;
};


export type QuerySearchUsersBySymbolsArgs = {
  symbols: SearchUsersBySymbolsInput;
};


export type QuerySearchUsersInCohortArgs = {
  programId: Scalars['ID'];
  regionId?: Maybe<Scalars['ID']>;
  searchRegex: Scalars['String'];
};


export type QuerySimpleProgramsSearchArgs = {
  query: Scalars['String'];
};


export type QuerySimpleUsersSearchArgs = {
  query: Scalars['String'];
};


export type QuerySubDomainExistsArgs = {
  subdomain: Scalars['String'];
};

export enum QuestionType {
  MultiAnswer = 'MultiAnswer',
  OpenEnded = 'OpenEnded',
  SingleAnswer = 'SingleAnswer'
}

export type Quiz = {
  __typename?: 'Quiz';
  description: Scalars['String'];
  feedbackText: Scalars['String'];
  id: Scalars['ID'];
  passPercent?: Maybe<Scalars['Int']>;
  questions: Array<QuizQuestion>;
  quizType: QuizType;
  title: Scalars['String'];
  totalSubmissions: Scalars['Int'];
  totalSubmissionsInGroup?: Maybe<Scalars['Int']>;
};


export type QuizTotalSubmissionsArgs = {
  programId?: Maybe<Scalars['ID']>;
};

export type QuizAnswerAttempt = {
  __typename?: 'QuizAnswerAttempt';
  answeredText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pickedOptions: Array<Scalars['String']>;
  question: Scalars['ID'];
};

export type QuizAnswerAttemptInput = {
  answeredText?: Maybe<Scalars['String']>;
  pickedOptions?: Maybe<Array<Scalars['ID']>>;
  question: Scalars['ID'];
};

export type QuizAssessment = {
  __typename?: 'QuizAssessment';
  aspects: Array<QuizAssessmentAspect>;
  description: Scalars['String'];
  feedbackText: Scalars['String'];
  id: Scalars['ID'];
  questions: Array<QuizAssessmentQuestion>;
  title: Scalars['String'];
};

export type QuizAssessmentAnswerAttempt = {
  __typename?: 'QuizAssessmentAnswerAttempt';
  id: Scalars['ID'];
  pickedOptions: Array<Scalars['String']>;
  question: Scalars['ID'];
};

export type QuizAssessmentAnswerOption = {
  __typename?: 'QuizAssessmentAnswerOption';
  affects: Array<QuizAssessmentAnswerOptionAffects>;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type QuizAssessmentAnswerOptionAffects = {
  __typename?: 'QuizAssessmentAnswerOptionAffects';
  aspect: Scalars['ID'];
  by: Scalars['Float'];
  id: Scalars['ID'];
  operation: Scalars['String'];
};

export type QuizAssessmentAnswerOptionAffectsInput = {
  aspect: Scalars['ID'];
  by?: Maybe<Scalars['Float']>;
  operation?: Maybe<QuizAssessmentMathOperations>;
};

export type QuizAssessmentAnswerOptionInput = {
  affects: Array<QuizAssessmentAnswerOptionAffectsInput>;
  text: TranslationsInput;
};

export type QuizAssessmentAspect = {
  __typename?: 'QuizAssessmentAspect';
  description: Scalars['String'];
  id: Scalars['ID'];
  initialValue: Scalars['Float'];
  maxValue: Scalars['Float'];
  title: Scalars['String'];
};

export type QuizAssessmentAspectInput = {
  description: TranslationsInput;
  initialValue?: Maybe<Scalars['Float']>;
  maxValue: Scalars['Float'];
  title: TranslationsInput;
};

export type QuizAssessmentAttempt = {
  __typename?: 'QuizAssessmentAttempt';
  answers: Array<QuizAssessmentAnswerAttempt>;
  id: Scalars['ID'];
  moduleSection: Scalars['ID'];
  program: Scalars['ID'];
  quiz: Scalars['ID'];
  results: Array<QuizAssessmentAttemptAspectResult>;
  user: Scalars['ID'];
};

export type QuizAssessmentAttemptAnswerInput = {
  pickedOptions?: Maybe<Array<Scalars['ID']>>;
  question: Scalars['ID'];
};

export type QuizAssessmentAttemptAspectResult = {
  __typename?: 'QuizAssessmentAttemptAspectResult';
  aspect: Scalars['ID'];
  id: Scalars['ID'];
  score: Scalars['Float'];
};

export type QuizAssessmentAttemptInput = {
  answers: Array<QuizAssessmentAttemptAnswerInput>;
};

export type QuizAssessmentInput = {
  aspects: Array<QuizAssessmentAspectInput>;
  description: TranslationsInput;
  feedbackText: TranslationsInput;
  title: TranslationsInput;
};

export enum QuizAssessmentMathOperations {
  Add = 'Add',
  Divide = 'Divide',
  Multiply = 'Multiply',
  Subtract = 'Subtract'
}

export type QuizAssessmentQuestion = {
  __typename?: 'QuizAssessmentQuestion';
  answerOptions: Array<QuizAssessmentAnswerOption>;
  id: Scalars['ID'];
  questionText: Scalars['String'];
  questionType: QuestionType;
};

export type QuizAssessmentQuestionInput = {
  answerOptions: Array<QuizAssessmentAnswerOptionInput>;
  questionText: TranslationsInput;
  questionType: QuestionType;
};

export type QuizAssessmentUpdateInput = {
  description: TranslationsInput;
  feedbackText: TranslationsInput;
  title: TranslationsInput;
};

export type QuizAttempt = {
  __typename?: 'QuizAttempt';
  answers: Array<QuizAnswerAttempt>;
  id: Scalars['ID'];
  moduleSection: Scalars['ID'];
  program: Scalars['ID'];
  quiz: Quiz;
  quizPlacement: QuizPlacement;
  score: Scalars['Float'];
  successPercent?: Maybe<Scalars['Int']>;
  user: User;
};

export type QuizAttemptInput = {
  answers: Array<QuizAnswerAttemptInput>;
};

export type QuizGroupMetrics = {
  __typename?: 'QuizGroupMetrics';
  quizId: Scalars['ID'];
  quizType: QuizType;
  totalSubmissionsInGroup: Scalars['Int'];
};

export type QuizInput = {
  description: TranslationsInput;
  feedbackText: TranslationsInput;
  passPercent?: Maybe<Scalars['Int']>;
  quizType?: Maybe<QuizType>;
  title: TranslationsInput;
};

export type QuizLastAttempt = {
  __typename?: 'QuizLastAttempt';
  lastAttempt: QuizAttempt;
  quiz: Scalars['ID'];
};

export type QuizLearnerMetrics = {
  __typename?: 'QuizLearnerMetrics';
  averageScore: Scalars['Float'];
  averageSuccessPercent: Scalars['Float'];
  lastAttempt?: Maybe<QuizAttempt>;
  quizId: Scalars['ID'];
  quizType: QuizType;
  totalAttempt: Scalars['Int'];
};

export enum QuizPlacement {
  InVideo = 'InVideo',
  Standalone = 'Standalone'
}

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  answerOptions: Array<QuizQuestionAnswerOption>;
  id: Scalars['ID'];
  questionText: Scalars['String'];
  questionType: QuestionType;
  weight: Scalars['Float'];
};

export type QuizQuestionAnswerOption = {
  __typename?: 'QuizQuestionAnswerOption';
  id: Scalars['ID'];
  isCorrect: Scalars['Boolean'];
  text: Scalars['String'];
  weight: Scalars['Float'];
};

export type QuizQuestionAnswerOptionInput = {
  isCorrect?: Maybe<Scalars['Boolean']>;
  text: TranslationsInput;
  weight?: Maybe<Scalars['Float']>;
};

export type QuizQuestionInput = {
  answerOptions?: Maybe<Array<QuizQuestionAnswerOptionInput>>;
  questionText: TranslationsInput;
  questionType: QuestionType;
  weight?: Maybe<Scalars['Float']>;
};

export enum QuizType {
  EvaluationBased = 'EvaluationBased',
  OpinionBased = 'OpinionBased',
  ScoreBased = 'ScoreBased'
}

export type Region = {
  __typename?: 'Region';
  code: Scalars['String'];
  countryCode: Scalars['String'];
  id: Scalars['ID'];
  latlong: Array<Scalars['Float']>;
  name: Scalars['String'];
};

export type RegionInput = {
  code: Scalars['String'];
  countryCode: Scalars['String'];
  latlong: Array<Scalars['Float']>;
  name: TranslationsInput;
};

/** User Role in the platform, available to register */
export enum RegisterUserRole {
  Admin = 'Admin',
  ContentManager = 'ContentManager',
  Instructor = 'Instructor',
  Learner = 'Learner',
  PlatformAdmin = 'PlatformAdmin',
  PlatformOwner = 'PlatformOwner',
  ProgramManager = 'ProgramManager',
  Tutor = 'Tutor',
  UserManager = 'UserManager'
}

export type RegistrationOptsInput = {
  enrollProgram?: Maybe<Scalars['ID']>;
  isPlateformOwner?: Maybe<Scalars['Boolean']>;
  programLicence?: Maybe<Scalars['String']>;
};

export type RemoveTutorsFromGroupingResult = {
  __typename?: 'RemoveTutorsFromGroupingResult';
  disbandedGroupsIds: Array<Scalars['ID']>;
  reallocatedLearnersIds: Array<Scalars['ID']>;
  totalDisbandedGroups: Scalars['Int'];
  totalReallocatedLearners: Scalars['Int'];
};

export type RemovedDiscussion = {
  __typename?: 'RemovedDiscussion';
  discussionId: Scalars['ID'];
  host: DiscussionHostUnion;
};

export type RemovedDiscussionMessage = {
  __typename?: 'RemovedDiscussionMessage';
  discussion: Discussion;
  messageId: Scalars['ID'];
  parent?: Maybe<DiscussionMessage>;
  root?: Maybe<DiscussionMessage>;
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
};

export type RewardStats = {
  __typename?: 'RewardStats';
  effortName: EffortName;
  totalRewardSizeAvailable: Scalars['Float'];
  totalRewardSizeEarned: Scalars['Float'];
};

export enum RewardType {
  Point = 'Point'
}

export type SatisfactionFeedback = {
  __typename?: 'SatisfactionFeedback';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  learner: User;
  message?: Maybe<Scalars['String']>;
  module: Scalars['ID'];
  program: Scalars['ID'];
  stars: Scalars['Int'];
  updatedAt: Scalars['Date'];
};

export type SatisfactionFeedbackInput = {
  message?: Maybe<Scalars['String']>;
  stars: Scalars['Int'];
};

export type ScaleCaption = {
  __typename?: 'ScaleCaption';
  id: Scalars['ID'];
  slots: Array<ScaleSlot>;
};

export type ScaleCaptionInput = {
  slots: Array<ScaleSlotInput>;
};

export type ScaleSlot = {
  __typename?: 'ScaleSlot';
  id: Scalars['ID'];
  title: Scalars['String'];
  weight: Scalars['Int'];
};

export type ScaleSlotInput = {
  title: TranslationsInput;
  weight: Scalars['Int'];
};

export type SearchUsersBySymbols = {
  __typename?: 'SearchUsersBySymbols';
  found: Array<User>;
  foundIds: Array<Scalars['ID']>;
  notFoundByEmails: Array<Scalars['String']>;
  notFoundByIds: Array<Scalars['ID']>;
  totalFound: Scalars['Int'];
};

export type SearchUsersBySymbolsInput = {
  emails?: Maybe<Array<Scalars['String']>>;
  ids?: Maybe<Array<Scalars['ID']>>;
};

export type SecondaryEmailInput = {
  secondaryEmail: Scalars['String'];
};

export type Section = {
  __typename?: 'Section';
  additionalReading: Array<AdditionalReading>;
  availableRewardsSize: Scalars['Int'];
  content?: Maybe<ModuleSectionContentUnion>;
  contentDiscussion?: Maybe<Discussion>;
  description?: Maybe<Scalars['String']>;
  duration: Scalars['Long'];
  id: Scalars['ID'];
  materialIndex: ProgramMaterialIndex;
  order: Scalars['Long'];
  title: Scalars['String'];
  type: ModuleSectionType;
};


export type SectionAvailableRewardsSizeArgs = {
  moduleId: Scalars['ID'];
  programId: Scalars['ID'];
  weekId: Scalars['ID'];
};

export type SectionInput = {
  description?: Maybe<TranslationsInput>;
  duration: Scalars['Long'];
  title: TranslationsInput;
  type: ModuleSectionType;
};

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  token: Scalars['String'];
  updatedAt: Scalars['Date'];
  user: User;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SkillInput = {
  name: TranslationsInput;
};

export type StartResetPasswordInput = {
  email: Scalars['String'];
};

export type SubmittedAssessmentAdditionalAnswer = {
  __typename?: 'SubmittedAssessmentAdditionalAnswer';
  additionalQuestion: AdditionalAssessmentQuestion;
  answerText: Scalars['String'];
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onDiscussionCreateInGroup: Discussion;
  onDiscussionRemoveInGroup: RemovedDiscussion;
  onDiscussionUpdateInGroup: Discussion;
  onEarnedReward: EarnedReward;
  onMembersOnlineInGroup: OnlineMembersInGroup;
  onMessageAttachmentsInDiscussion: DiscussionMessage;
  onMessageInDiscussion: DiscussionMessage;
  onMessagePinsInDiscussion: DiscussionMessage;
  onMessageRemoveInDiscussion: RemovedDiscussionMessage;
  onMessageReplyInDiscussions: DiscussionMessage;
  onMessageUpdateInDiscussion: DiscussionMessage;
  onMessageVoteInDiscussion: DiscussionMessage;
  onPlatformNotification: PlatformNotification;
  onPlatformNotificationCounterUpdate: Scalars['Int'];
};


export type SubscriptionOnDiscussionCreateInGroupArgs = {
  groupId: Scalars['ID'];
};


export type SubscriptionOnDiscussionRemoveInGroupArgs = {
  groupId: Scalars['ID'];
};


export type SubscriptionOnDiscussionUpdateInGroupArgs = {
  groupId: Scalars['ID'];
};


export type SubscriptionOnMembersOnlineInGroupArgs = {
  groupId: Scalars['ID'];
};


export type SubscriptionOnMessageAttachmentsInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessagePinsInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageRemoveInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageUpdateInDiscussionArgs = {
  discussionId: Scalars['ID'];
};


export type SubscriptionOnMessageVoteInDiscussionArgs = {
  discussionId: Scalars['ID'];
};

export enum SubtitleLanguage {
  Ar = 'Ar',
  En = 'En',
  Fr = 'Fr'
}

/** Interface and Notifications language */
export enum SupportedLanguage {
  Ar = 'Ar',
  En = 'En',
  Fr = 'Fr'
}

export type TestEarnedRewardInput = {
  effortName: EffortName;
  rewardSize: Scalars['Int'];
};

export type TestEarnedRewardMetaInput = {
  toUser: Scalars['ID'];
  useLanguage?: Maybe<SupportedLanguage>;
};

export type TestEmailNotificationInput = {
  email: Scalars['String'];
  language?: Maybe<SupportedLanguage>;
  payload: Scalars['JsonString'];
  topic: NotificationTopic;
};

export type TestPlatformNotificationInput = {
  payload: Scalars['JsonString'];
  topic: NotificationTopic;
  userId: Scalars['ID'];
};


export type TranslationsInput = {
  ar?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
};

export type TypingInChatChannelInput = {
  channelId: Scalars['ID'];
  isStarted: Scalars['Boolean'];
};

export type UpdateAssessmentDetailsInput = {
  description?: Maybe<TranslationsInput>;
  title?: Maybe<TranslationsInput>;
};

export type UpdateDiscussionForGroupsInput = {
  alsoInGroups?: Maybe<Array<Scalars['ID']>>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateDiscussionMessageInput = {
  text: Scalars['String'];
};

export type UpdateNotificationsSettingsInput = {
  email?: Maybe<Array<NotificationsGroup>>;
  push?: Maybe<Array<NotificationsGroup>>;
  sms?: Maybe<Array<NotificationsGroup>>;
  whatsApp?: Maybe<Array<NotificationsGroup>>;
};

export type UpdatePersonalDetailsInput = {
  country?: Maybe<Scalars['ID']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  employeeId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['ID']>;
  phoneNumber?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['ID']>;
  whatsAppNumber?: Maybe<Scalars['String']>;
};

export type UpdatePlatformSubDomainInput = {
  newDomain: Scalars['String'];
  oldDomain: Scalars['String'];
};

export type UpdatePlatformVarInput = {
  forRoles?: Maybe<Array<UserRole>>;
  name: Scalars['String'];
  value: Scalars['JsonString'];
};

export type UpdateProgramLicenceInput = {
  limit?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type UpdateSectionInput = {
  description?: Maybe<TranslationsInput>;
  duration?: Maybe<Scalars['Long']>;
  title?: Maybe<TranslationsInput>;
  type: ModuleSectionType;
};

export type UpdateUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  whatsAppNumber?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  isConfirmed: Scalars['Boolean'];
  isOnline: Scalars['Boolean'];
  isTest: Scalars['Boolean'];
  language: SupportedLanguage;
  lastActivityAt: Scalars['Date'];
  notificationSettings: NotificationSettings;
  profile: Profile;
  quizLearnerMetrics: Array<QuizLearnerMetrics>;
  role: RegisterUserRole;
  source: UserSource;
  submittedModuleAssignments: Array<AssignmentSubmission>;
  submittedQuizAttempts: Array<QuizAttempt>;
  totalRewardsSize: Scalars['Int'];
  totalTutoredGroups: Scalars['Int'];
  updatedAt: Scalars['Date'];
  usedTours: Array<PlatformTour>;
};


export type UserQuizLearnerMetricsArgs = {
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
};


export type UserSubmittedModuleAssignmentsArgs = {
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
};


export type UserSubmittedQuizAttemptsArgs = {
  programId?: Maybe<Scalars['ID']>;
  weekId?: Maybe<Scalars['ID']>;
};


export type UserTotalTutoredGroupsArgs = {
  programId: Scalars['ID'];
};

export type UserInvitationInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

/** User role */
export enum UserRole {
  Admin = 'Admin',
  ContentManager = 'ContentManager',
  Instructor = 'Instructor',
  Learner = 'Learner',
  PlatformOwner = 'PlatformOwner',
  ProgramManager = 'ProgramManager',
  Tutor = 'Tutor',
  UserManager = 'UserManager'
}

/** Roughly speaking it is a website, from which user came from */
export enum UserSource {
  Alpages = 'Alpages',
  Common = 'Common',
  Ethiopia = 'Ethiopia',
  FiveQs = 'FiveQS',
  Iquad = 'Iquad',
  Learn = 'Learn',
  Oman = 'Oman',
  Rwanda = 'Rwanda',
  SierraLeone = 'SierraLeone'
}

export type VideoGlossary = {
  __typename?: 'VideoGlossary';
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  timepoint: Scalars['TimePoint'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type VideoGlossaryInput = {
  description?: Maybe<TranslationsInput>;
  timepoint: Scalars['TimePoint'];
  title: TranslationsInput;
};

export type VideoLesson = {
  __typename?: 'VideoLesson';
  glossaries?: Maybe<Array<VideoGlossary>>;
  id: Scalars['ID'];
  isExternal?: Maybe<Scalars['Boolean']>;
  overlays?: Maybe<Array<VideoOverlay>>;
  quizzes?: Maybe<Array<InVideoQuiz>>;
  subtitles?: Maybe<Array<VideoSubtitle>>;
  thumbnail?: Maybe<ImageSizes>;
  transcript?: Maybe<Scalars['String']>;
  videoSources: Array<VideoSource>;
};

export type VideoLessonInput = {
  glossaries?: Maybe<Array<VideoGlossaryInput>>;
  isExternal?: Maybe<Scalars['Boolean']>;
  overlays?: Maybe<Array<VideoOverlayInput>>;
  subtitles?: Maybe<Array<VideoSubtitleInput>>;
  transcript?: Maybe<TranslationsInput>;
  videoSources: Array<VideoSourceInput>;
};

export type VideoOverlay = {
  __typename?: 'VideoOverlay';
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  items: Array<Scalars['String']>;
  jsStyle?: Maybe<Scalars['Any']>;
  jsVariables: Scalars['Any'];
  timepointEnd: Scalars['TimePoint'];
  timepointStart: Scalars['TimePoint'];
  title: Scalars['String'];
  type: VideoOverlayType;
  updatedAt: Scalars['Date'];
};

export type VideoOverlayInput = {
  items?: Maybe<Array<TranslationsInput>>;
  jsStyle?: Maybe<Scalars['Any']>;
  jsVariables: Scalars['Any'];
  timepointEnd: Scalars['TimePoint'];
  timepointStart: Scalars['TimePoint'];
  title: TranslationsInput;
  type: VideoOverlayType;
};

export enum VideoOverlayType {
  Image = 'Image',
  List = 'List',
  Text = 'Text'
}

export type VideoSource = {
  __typename?: 'VideoSource';
  id: Scalars['ID'];
  label: Scalars['String'];
  link: Scalars['String'];
  resolution: Scalars['Int'];
  type: Scalars['String'];
};

export type VideoSourceInput = {
  label: Scalars['String'];
  link: TranslationsInput;
  resolution: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type VideoSubtitle = {
  __typename?: 'VideoSubtitle';
  createdAt: Scalars['Date'];
  file: Scalars['String'];
  id: Scalars['ID'];
  language: SubtitleLanguage;
  updatedAt: Scalars['Date'];
};

export type VideoSubtitleInput = {
  file: Scalars['String'];
  language: SubtitleLanguage;
};

export type WeekRewardStats = {
  __typename?: 'WeekRewardStats';
  rewards: Array<RewardStats>;
  week?: Maybe<ProgramWeek>;
};

/** Approach to fetch messages of discussion */
export enum FetchMessagesApproach {
  OffspringOnly = 'OffspringOnly',
  RepliesOnly = 'RepliesOnly'
}

export type CreatePlatformMutationVariables = {
  platformInput: PlatformInput;
};


export type CreatePlatformMutation = (
  { __typename?: 'Mutation' }
  & { createPlatform: (
    { __typename?: 'Platform' }
    & Pick<Platform, 'subdomain' | 'source' | 'defaultLanguage'>
    & { theme?: Maybe<(
      { __typename?: 'PlatformTheme' }
      & Pick<PlatformTheme, 'primaryColor' | 'secondaryColor' | 'logo' | 'favicon'>
    )> }
  ) }
);

export type SubDomainExistsQueryVariables = {
  subdomain: Scalars['String'];
};


export type SubDomainExistsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'subDomainExists'>
);

export type FetchMyPlatformQueryVariables = {
  subdomain: Scalars['String'];
};


export type FetchMyPlatformQuery = (
  { __typename?: 'Query' }
  & { fetchMyPlatform: (
    { __typename?: 'Platform' }
    & Pick<Platform, 'subdomain' | 'source' | 'defaultLanguage'>
    & { theme?: Maybe<(
      { __typename?: 'PlatformTheme' }
      & Pick<PlatformTheme, 'primaryColor' | 'secondaryColor' | 'favicon' | 'logo'>
    )> }
  ) }
);

export type LoginMutationVariables = {
  credentials: CredentialsInput;
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Session' }
    & Pick<Session, 'id' | 'createdAt' | 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'fullName' | 'lastName' | 'email'>
      ) }
    ) }
  ) }
);

export type RegisterUserMutationVariables = {
  opts?: Maybe<RegistrationOptsInput>;
  user: CreateUserInput;
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'Session' }
    & Pick<Session, 'id' | 'createdAt' | 'updatedAt' | 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'role'>
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'firstName' | 'lastName' | 'email'>
      ) }
    ) }
  ) }
);

export type UpdateMyPlatformSubDomainMutationVariables = {
  updatePlatformSubDomainInput: UpdatePlatformSubDomainInput;
};


export type UpdateMyPlatformSubDomainMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateMyPlatformSubDomain'>
);

export type CreateProgramMutationVariables = {
  program: ProgramInput;
};


export type CreateProgramMutation = (
  { __typename?: 'Mutation' }
  & { createProgram: (
    { __typename?: 'Program' }
    & Pick<Program, 'id' | 'createdAt' | 'updatedAt' | 'source' | 'startsAt' | 'type' | 'title' | 'description' | 'shortDescription' | 'videoUrl'>
    & { weeks?: Maybe<Array<(
      { __typename?: 'ProgramWeek' }
      & Pick<ProgramWeek, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'order'>
    )>>, poster?: Maybe<(
      { __typename?: 'ImageSizes' }
      & Pick<ImageSizes, 'sm' | 'md' | 'lg'>
    )>, introVideoThumb?: Maybe<(
      { __typename?: 'ImageSizes' }
      & Pick<ImageSizes, 'sm' | 'lg' | 'md'>
    )> }
  ) }
);

export type FetchProgramsBySourceQueryVariables = {
  clientFilter?: Maybe<ClientFilterInput>;
  source: Scalars['String'];
};


export type FetchProgramsBySourceQuery = (
  { __typename?: 'Query' }
  & { fetchProgramsBySource: Array<(
    { __typename?: 'Program' }
    & Pick<Program, 'id' | 'source' | 'type' | 'level' | 'title' | 'description'>
    & { weeks?: Maybe<Array<(
      { __typename?: 'ProgramWeek' }
      & Pick<ProgramWeek, 'createdAt'>
    )>> }
  )> }
);

export const CreatePlatformDocument = gql`
    mutation CreatePlatform($platformInput: PlatformInput!) {
  createPlatform(platformInput: $platformInput) {
    subdomain
    source
    defaultLanguage
    theme {
      primaryColor
      secondaryColor
      logo
      favicon
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatePlatformGQL extends Apollo.Mutation<CreatePlatformMutation, CreatePlatformMutationVariables> {
    document = CreatePlatformDocument;
    
  }
export const SubDomainExistsDocument = gql`
    query SubDomainExists($subdomain: String!) {
  subDomainExists(subdomain: $subdomain)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubDomainExistsGQL extends Apollo.Query<SubDomainExistsQuery, SubDomainExistsQueryVariables> {
    document = SubDomainExistsDocument;
    
  }
export const FetchMyPlatformDocument = gql`
    query FetchMyPlatform($subdomain: String!) {
  fetchMyPlatform(subdomain: $subdomain) {
    subdomain
    source
    defaultLanguage
    theme {
      primaryColor
      secondaryColor
      favicon
      logo
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchMyPlatformGQL extends Apollo.Query<FetchMyPlatformQuery, FetchMyPlatformQueryVariables> {
    document = FetchMyPlatformDocument;
    
  }
export const LoginDocument = gql`
    mutation Login($credentials: CredentialsInput!) {
  login(credentials: $credentials) {
    id
    createdAt
    token
    user {
      id
      profile {
        fullName
        lastName
        email
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
  }
export const RegisterUserDocument = gql`
    mutation RegisterUser($opts: RegistrationOptsInput, $user: CreateUserInput!) {
  registerUser(opts: $opts, user: $user) {
    id
    createdAt
    updatedAt
    token
    user {
      id
      role
      profile {
        firstName
        lastName
        email
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterUserGQL extends Apollo.Mutation<RegisterUserMutation, RegisterUserMutationVariables> {
    document = RegisterUserDocument;
    
  }
export const UpdateMyPlatformSubDomainDocument = gql`
    mutation UpdateMyPlatformSubDomain($updatePlatformSubDomainInput: UpdatePlatformSubDomainInput!) {
  updateMyPlatformSubDomain(
    updatePlatformSubDomainInput: $updatePlatformSubDomainInput
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateMyPlatformSubDomainGQL extends Apollo.Mutation<UpdateMyPlatformSubDomainMutation, UpdateMyPlatformSubDomainMutationVariables> {
    document = UpdateMyPlatformSubDomainDocument;
    
  }
export const CreateProgramDocument = gql`
    mutation CreateProgram($program: ProgramInput!) {
  createProgram(program: $program) {
    id
    createdAt
    updatedAt
    source
    startsAt
    type
    title
    description
    shortDescription
    weeks {
      id
      createdAt
      updatedAt
      title
      description
      order
    }
    poster {
      sm
      md
      lg
    }
    videoUrl
    introVideoThumb {
      sm
      lg
      md
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateProgramGQL extends Apollo.Mutation<CreateProgramMutation, CreateProgramMutationVariables> {
    document = CreateProgramDocument;
    
  }
export const FetchProgramsBySourceDocument = gql`
    query FetchProgramsBySource($clientFilter: ClientFilterInput, $source: String!) {
  fetchProgramsBySource(clientFilter: $clientFilter, source: $source) {
    id
    source
    type
    level
    title
    description
    weeks {
      createdAt
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchProgramsBySourceGQL extends Apollo.Query<FetchProgramsBySourceQuery, FetchProgramsBySourceQueryVariables> {
    document = FetchProgramsBySourceDocument;
    
  }