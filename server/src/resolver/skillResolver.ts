import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Skill } from "../entity/skill";
import dataSource from "../utils";

@Resolver(Skill)
export class SkillResolver {
  @Query(() => [Skill])
  async getSkill(): Promise<Skill> {
    // return await dataSource.manager.find(Skill, {
    //   id: true,
    //   name: true,
    //   skill: true,
    // })
  }
}
