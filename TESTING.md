# Testing fundamentals

## Concepts

- Test runner
- Test file
- Test suite
- Test case
- SUD - System under test
- TDD - Test-driven development
- BDD - Behaviour-driven development
- AAA - arrange, act, assert
- RGR - red-green-refactor

## Recommendations before writing tests

- Use typescript
- Use eslint

## Reasons why we use vitest:

- Fast
- ESM, TypeScript, JSX
- Jest compatible API
- Imported and Global API
- Vite integration
- Watch mode

## Configuration

- global = false
- environment = 'node'
- testTimeout = 5000
- globalSetup (run once)
- setupFiles (run for each test file)

## API

### General

- describe (test suite)
- it/test (promise, default timeout 5s): (test case)
  - context
  - .todo
  - .skip
  - .only
- beforeAll/beforeEach (setup)
- afterAll/afterEach (teardown)
- expect(expected).toBe(actual) (assertion)

### Mocking

- mock = vi.fn()
- spy = vi.spyOn(object, 'method')
- mock.mockImplementation()/mock.mockImplementationOnce()
- mock.mockReturnValue()/mock.mockReturnValueOnce()
- mock.mockResolvedValue()/mock.mockResolvedValueOnce()
- mock.mockRejectedValue()/mock.mockRejectedValueOnce()
- expect(mock).toHaveBeenCalled()
- expect(mock).toHaveBeenCalledWith()
- expect(mock).toHaveBeenCalledTimes()
- mock.mockClear()/mock.mockReset()/mock.mockRestore()
- vi.clearAllMocks()/vi.resetAllMocks()/vi.restoreAllMocks()
- vi.mock('module', factory)
- vi.importActual('module')
- vi.stubGlobal('global', mock)/vi.unstubAllGlobals();
- vi.stubEnv('env', value)/vi.unstubAllEnvs()

#### Timers

- vi.useFakeTimers()/vi.useRealTimers()
- vi.setSystemTime()
- vi.advanceTimersByTime()/vi.advanceTimersByTimeAsync()
- vi.advanceTimersToNextTimer()/vi.advanceTimersToNextTimerAsync()

### Test types

- Unit (test single unit only) A -> B -> C
- Integration (test multiple units, but not the whole system) A -> B -> C
- E2E (test whole system)
