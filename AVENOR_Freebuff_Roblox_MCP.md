> **Project direction note:** This file documents the optional development connection between Freebuff Desktop and Roblox Studio. It does not define gameplay. The current AVENOR design is a rotating Open World shooter sandbox with permanent weapon discoveries and separate competitive playlists. Use the current technical and roadmap documents when building features. Only work in the Roblox Studio project/place the user has explicitly opened and connected; do not infer permission to access unrelated files, accounts or devices.

---

# AVENOR — Freebuff + Official Roblox Studio MCP Setup

This guide explains how to connect **Freebuff Desktop** to the **official MCP server built into Roblox Studio** on Windows.

The goal is to let a Freebuff coding agent inspect and work with the Roblox Studio place that you explicitly open and connect. This is an integration guide, not proof that the connection has already been tested on this machine.

## 1. Use the built-in Roblox Studio MCP server

Roblox Studio includes its own MCP server. Prefer this built-in server over the older standalone `studio-rust-mcp-server`, which Roblox has archived and replaced with the Studio integration.

Official documentation:
- [Roblox Studio MCP documentation](https://create.roblox.com/docs/studio/mcp)
- [Roblox announcement: Studio built-in MCP server](https://devforum.roblox.com/t/assistant-updates-studio-built-in-mcp-server-and-playtest-automation/4474643)
- [Archived standalone server notice](https://github.com/Roblox/studio-rust-mcp-server)

Roblox currently provides Quick Connect instructions for a selection of named clients. Freebuff is not listed there, so this guide uses the manual MCP configuration route instead.

## 2. How Freebuff loads MCP servers

Freebuff's documented project-level configuration location is:

```text
<project-root>/.agents/mcp.json
```

The file uses the standard `mcpServers` JSON structure. On first use in a repository, Freebuff may ask you to trust the `.agents` directory before loading its configuration.

References:
- [Freebuff MCP setup guide](https://freebuff.com/perspectives/blog/implementation-guide/how-to-set-up-a-free-coding-agent-without-usage-charges)
- [Freebuff source: MCP config loader](https://github.com/CodebuffAI/freebuff/blob/main/sdk/src/agents/load-mcp-config.ts)

## 3. Enable the MCP server in Roblox Studio

1. Install or update Roblox Studio.
2. Open the AVENOR place you want the agent to work with.
3. Open the **Assistant** panel in Studio.
4. Open the Assistant's **…** menu.
5. Choose **Manage MCP Servers**.
6. Enable **Studio as MCP server**.
7. Keep that Studio instance open while using the connection.

The Studio MCP settings should show a green connection indicator when the server is enabled and connected.

## 4. Add the Freebuff configuration

In the root folder of your AVENOR project workspace, create this folder and file:

```text
.agents/
└── mcp.json
```

Put this exact configuration in `mcp.json`:

```json
{
  "mcpServers": {
    "Roblox_Studio": {
      "command": "cmd.exe",
      "args": [
        "/c",
        "%LOCALAPPDATA%\\Roblox\\mcp.bat"
      ]
    }
  }
}
```

This is the Windows launch command documented by Roblox. The environment variable is expanded by Windows when `cmd.exe` runs the Roblox MCP batch file.

**Important:** The `.agents` folder belongs at the root of the workspace Freebuff has opened. Do not put it inside a nested source folder unless that nested folder is itself the workspace root.

## 5. Load and verify the connection

1. Save `.agents/mcp.json`.
2. If Freebuff asks whether to trust the `.agents` directory, review the change and approve it only if you created or recognize the configuration.
3. Reload the Freebuff agent or restart the relevant Freebuff workspace so it reads the new MCP configuration.
4. Keep Roblox Studio open with **Studio as MCP server** enabled.
5. Ask the agent to list the available Roblox Studio instances. Roblox's MCP workflow uses a Studio instance identifier (`studio_id`) when calling Studio tools.
6. Confirm that the agent can see the intended open Studio instance before asking it to inspect or change anything.

A useful first, read-only test prompt:

```text
Connect to the Roblox Studio instance I have open. List the available Studio instances and report the place name. Do not edit anything.
```

If the agent can identify the intended Studio instance, try a second read-only request, such as asking it to summarize the top-level Explorer hierarchy. Do not begin with a request to rewrite scripts or modify the place.

## 6. What the Studio MCP tools can do

The official Studio MCP integration exposes tools for workflows such as:

- Inspecting the place's data model and Explorer hierarchy.
- Finding, reading, and editing scripts.
- Creating or modifying supported Studio instances and properties.
- Searching or inserting assets through supported Studio tools.
- Executing Luau in Studio.
- Starting playtests and inspecting their output.
- Reading the Studio console and capturing screenshots.
- Simulating supported input during playtests.

The exact tools available to Freebuff depend on the Roblox Studio MCP version and what the client successfully loads. The list above describes documented Studio capabilities, not a guarantee that every tool will be available in every Freebuff session.

## 7. Troubleshooting

### Freebuff does not show Roblox tools

- Confirm the file is exactly `.agents/mcp.json` in the active workspace root.
- Check that the JSON is valid and that the server key is inside `mcpServers`.
- Make sure the `.agents` directory was trusted if Freebuff requested trust.
- Reload the agent or restart the workspace after changing the config.
- Confirm Roblox Studio is installed and that this file exists:

```text
%LOCALAPPDATA%\\Roblox\\mcp.bat
```

### Roblox Studio does not show a connected MCP server

- In Studio, reopen **Assistant → … → Manage MCP Servers**.
- Confirm **Studio as MCP server** is enabled.
- Restart Studio and then reload the Freebuff agent.
- Keep the target place open in the Studio instance you want to use.

### The agent sees no Studio instance

- Verify the Studio MCP connection indicator is green.
- Make sure the intended Studio instance is still open.
- Ask the agent to list Studio instances again before requesting any operation.

### The connection still fails

Do not guess at alternate executable paths or install an unrelated third-party MCP server. Recheck the current Roblox and Freebuff documentation linked above, then inspect the exact error shown by Freebuff or Studio.

## 8. Safety and project workflow

**Treat this connection as write access to the open Roblox Studio place.** An MCP client with editing tools may be able to change scripts, objects, and other place content.

For AVENOR, use this workflow:

1. Keep a separate test place or a clean backup before major agent-assisted changes.
2. Start with read-only inspection and planning.
3. Ask the agent to explain the intended changes before applying broad edits.
4. Make changes in small, reviewable steps.
5. Test the place in Studio after each meaningful change.
6. Save or publish only after reviewing the result yourself.

Do not connect a client or load an MCP configuration you do not trust. Do not ask an agent to make broad changes to the live or only copy of the game.

## 9. Compatibility status

The setup is **expected to be compatible** because Roblox documents a standard local Windows MCP launch command and Freebuff documents support for standard project-level `mcpServers` configuration.

However, Roblox does not list Freebuff in its Quick Connect clients, and this exact Freebuff Desktop + Roblox Studio combination has not been verified as working in this project. Treat the first read-only connection test above as the compatibility check. If it fails, capture the exact error before changing the configuration.

---

**Recommended AVENOR setup:** one dedicated Roblox Studio test place, one Freebuff workspace rooted at the AVENOR project, and the project-level `.agents/mcp.json` configuration shown above.
