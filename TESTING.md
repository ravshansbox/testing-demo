# Testing fundamentals

## Concepts

- Test runner (jest, vitest, jasmine, mocha)
- Test file (.(spec|test).(js|jsx|ts|tsx))
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

- global
- environment
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
- beforeAll/beforeEach/afterAll/afterEach (setup/teardown)
- expect (assertion)

### Mocking

- vi.stubEnv/vi.unstubAllEnvs
- mock = vi.fn()
- vi.mock('module1', () => {
  const realModule = await vi.importActual('module1');
  return {...realModule, api1: vi.mock()}
  })
- mock.mockClear/mock.mockReset/mockRestore
- vi.clearAllMocks/vi.resetAllMocks/vi.restoreAllMocks
- spy = vi.spyOn(object, 'method')
- expect(mock/spy).toHaveBeenCalled()
- expect(mock/spy).toHaveBeenCalledTimes(2)
- vi.stubGlobal('key', mock)
- vi.importActual('module')
- vi.useFakeTimers/vi.useRealTimers/vi.setSystemTime
- vi.advanceTimersByTime/vi.advanceTimersByTimeAsync
- vi.advanceTimersToNextTimer/vi.advanceTimersToNextTimerAsync

### Test types

- Unit (test single unit only) A -> B -> C -> D
- Integration (test multiple units, but not the whole system) A -> B -> C -> D
- E2E (test whole system)
