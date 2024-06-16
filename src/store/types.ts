export type IMainStore = {
  groups: IGroups;
};

export type IGroup = {
  id: string;
  name: string;
  description: string;
  priority: number;
};

export type IGroups = Record<string, IGroup>;
