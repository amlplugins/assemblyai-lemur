/**
 * @amlplugins/assemblyai-lemur
 *
 * Thin namespaced re-export of the native assemblyai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * AssemblyAI LeMUR — audio-grounded LLM for Q&A, summary, action items, and custom prompts over transcripts.
 */

import * as _sdk from "assemblyai";
export * from "assemblyai";
export { _sdk as sdk };
export default _sdk;
